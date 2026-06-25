import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

let handler;

async function getHandler() {
  if (!handler) {
    try {
      const serverModule = await import(join(__dirname, '..', 'dist', 'server', 'server.js'));
      handler = serverModule.default;
    } catch (err) {
      console.error('Failed to load server:', err);
      throw err;
    }
  }
  return handler;
}

export default async (req, res) => {
  try {
    const server = await getHandler();

    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = new URL(req.url || '/', `${protocol}://${host}`);

    // Create a Fetch API Request
    const request = new Request(url.toString(), {
      method: req.method,
      headers: req.headers,
      ...(req.method !== 'GET' && req.method !== 'HEAD' && req.body ? { body: req.body } : {}),
    });

    // Get response from server
    const response = await server.fetch(request, {}, {});

    // Copy status
    res.status(response.status);

    // Copy headers
    response.headers.forEach((value, name) => {
      // Skip hop-by-hop headers
      if (!['connection', 'keep-alive', 'transfer-encoding', 'upgrade'].includes(name.toLowerCase())) {
        res.setHeader(name, value);
      }
    });

    // Send body
    const text = await response.text();
    res.send(text);
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).send('Internal Server Error');
  }
};

