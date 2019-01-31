const http = require('http');

const colors = ['red', 'green', 'blue'];

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
    color: colors[Math.floor(Math.random() * 3)]
  };

  res.end(getUserType(user));
});

server.listen(3000);
