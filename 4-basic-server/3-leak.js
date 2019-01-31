const http = require('http');
const crypto = require('crypto');

const colors = ['red', 'green', 'blue'];
const cache = {};

function getUserType(user) {
  // - long or cpu-intensive task -

  switch (user.color) {
    case 'red':
      return 'red user';

    case 'green':
      return 'green user';

    case 'blue':
      return 'blue user';
  }
}

const server = http.createServer((req, res) => {
  const user = {
    uid: crypto.randomBytes(10).toString('hex'),
    color: colors[Math.floor(Math.random() * 3)]
  };

  const cacheKey = JSON.stringify(user);

  if (!cache[cacheKey]) {
    cache[cacheKey] = getUserType(user);
  }

  res.end(cache[cacheKey]);
});

server.listen(3000);
