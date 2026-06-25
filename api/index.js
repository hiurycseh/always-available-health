export default async (req, res) => {
  try {
    const { default: server } = await import('../dist/server/server.js');

    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = new URL(req.url || '/', `${protocol}://${host}`);

    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
    });

    const response = await server.fetch(request, {}, {});

    res.status(response.status);
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    res.end(await response.text());
  } catch (error) {
    console.error(error);
    res.status(500).end('Error');
  }
};
