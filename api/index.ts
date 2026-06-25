export default async (req, res) => {
  try {
    // Import the TanStack Start server
    const { default: server } = await import('../dist/server/server.js');

    // Create Request object
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = new URL(req.url || '/', `${protocol}://${host}`);

    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
    });

    // Get response from server
    const response = await server.fetch(request, {}, {});

    // Set status and headers
    res.status(response.status);
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    // Send body
    res.end(await response.text());
  } catch (error) {
    console.error('API error:', error);
    res.status(500).send('Internal Server Error');
  }
};
