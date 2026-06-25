import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist', 'server');

let serverModule;

export default async function handler(req, res) {
  try {
    // Lazy load the server module
    if (!serverModule) {
      const serverPath = join(distDir, 'server.js');
      serverModule = await import('file://' + serverPath);
    }

    // Get the server object
    const server = serverModule.default;

    // Create a URL object
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host;
    const url = new URL(req.url || '/', `${protocol}://${host}`);

    // Create a Request object
    const fetchRequest = new Request(url, {
      method: req.method,
      headers: new Headers(req.headers),
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });

    // Call the server fetch handler
    const response = await server.fetch(fetchRequest, {}, {});

    // Set response status
    res.status(response.status);

    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send response body
    const buffer = await response.arrayBuffer();
    res.end(Buffer.from(buffer));
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
