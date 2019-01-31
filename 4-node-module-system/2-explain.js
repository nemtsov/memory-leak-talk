// main.js
(function (exports, require, module, __filename, __dirname) {
  const value = require('./value');
  const proxy = require('./proxy');

  console.log(value, proxy);
});


// value.js
(function (exports, require, module, __filename, __dirname) {
  module.exports = Math.random();
});


// proxy.js
(function (exports, require, module, __filename, __dirname) {
  const value = require('./value');

  module.exports = value;
});


//---------------


function require_v1(path) {
  const resolvedPath = require.resolvedPath(path);

  const moduleContents = fs.readFile(resolvedPath);
  const moduleFunction = new Function(moduleContents);

  const exports = {};
  const module = { exports };
  
  moduleFunction(exports, require, module, resolvedPath, path.dirname(resolvedPath));

  return module;
}


//---------------


function require_v2(path) {
  const resolvedPath = require.resolvedPath(path);

  if (require.cache[resolvedPath]) {
    return require.cache[resolvedPath];
  }

  const moduleContents = fs.readFile(resolvedPath);
  const moduleFunction = new Function(moduleContents);

  const exports = {};
  const module = { exports };
  
  moduleFunction(exports, require, module, resolvedPath, path.dirname(resolvedPath));

  require.cache = module;

  return module;
}
