let connection;

const handleUserInput = (key) => {
  let movement = {
    'w': 'Move: up', 
    'a': "Move: left",
    's': 'Move: down', 
    'd': 'Move: right'
  };
  if (key === '\u0003') {
    process.exit();
  }
  for (let letter in movement) {
    if (key === letter) {
      // console.log(movement[letter]);
      connection.write(movement[letter])
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