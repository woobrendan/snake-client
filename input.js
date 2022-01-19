const {sendMessage} = require('./constants');
let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  for (let letter in sendMessage) {
    if (key === letter) {
      connection.write(sendMessage[letter])
    }
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,

}