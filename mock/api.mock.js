const mocks = [
  {
    pattern: '/api/*',
    method: 'POST',
    handle: (req, res) => {
      const path = req.url;
      const data = {
        url: req.url,
        params: req.params,
        query: req.query,
      };

      res.setHeader('Content-Type', 'application/json');
      req.on('data', (bodyString) => {
        data.body = JSON.parse(bodyString)
        res.end(JSON.stringify({ data }));
      });
    },
  },
];

export default mocks;
