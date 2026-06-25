import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, 'dist', 'server');

// Import the built server
const { default: server } = await import(join(distDir, 'server.js'));

const httpServer = createServer(async (req, res) => {
  try {
    // Create a Request object compatible with fetch API
    const url = new URL(req.url, `http://${req.headers.host}`);
    const fetchRequest = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
    });

    // Call the server fetch handler
    const response = await server.fetch(fetchRequest, {}, {});

    // Set response headers
    res.writeHead(response.status, Object.fromEntries(response.headers));

    // Send response body
    if (response.body) {
      res.end(await response.text());
    } else {
      res.end();
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
