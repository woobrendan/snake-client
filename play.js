const {connect} = require('./client');

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

console.log('Connection ...');
connect();
setupInput();