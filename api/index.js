export default async function handler(req, res) {
  try {
    const { default: server } = await import('../dist/server/server.js');

    const url = new URL(req.url, `https://${req.headers.host}`);
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
    });

    const response = await server.fetch(request);

    res.setHeader('Content-Type', response.headers.get('content-type') || 'text/html');
    res.status(response.status);

    response.headers.forEach((value, name) => {
      if (name.toLowerCase() !== 'content-encoding') {
        res.setHeader(name, value);
      }
    });

    res.end(await response.text());
  } catch (error) {
    console.error(error);
    res.status(500).end('Server error');
  }
}
