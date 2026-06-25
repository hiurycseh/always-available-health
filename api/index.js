import server from '../dist/server/server.js';
import { readFileSync } from 'fs';
import { join } from 'path';

export default async (req, res) => {
  // Serve static assets directly
  if (req.url.startsWith('/assets/')) {
    try {
      const filePath = join(process.cwd(), 'public', req.url);
      const file = readFileSync(filePath);
      res.setHeader('content-type', 'application/octet-stream');
      res.end(file);
      return;
    } catch (e) {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
  }

  try {
    // Convert Node.js req to Fetch API Request
    const url = `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers['x-forwarded-host'] || req.headers.host}${req.url}`;
    const method = req.method;
    const headers = new Headers(req.headers);

    let body = null;
    if (method !== 'GET' && method !== 'HEAD') {
      body = await new Promise((resolve) => {
        let data = '';
        req.on('data', chunk => data += chunk);
        req.on('end', () => resolve(data));
      });
    }

    const fetchRequest = new Request(url, {
      method,
      headers,
      body
    });

    // Call the Fetch API handler
    const fetchResponse = await server.fetch(fetchRequest, {}, {});

    // Convert Fetch API Response to Node.js res
    res.statusCode = fetchResponse.status;
    fetchResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const buffer = await fetchResponse.arrayBuffer();
    res.end(Buffer.from(buffer));
  } catch (error) {
    console.error('Serverless function error:', error);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end('<h1>Server Error</h1>');
  }
};

