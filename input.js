let connection;

const handleUserInput = (key) => {
  let movement = {
    'w': 'Move: up', 
    'a': "Move: left",
    's': 'Move: down', 
    'd': 'Move: right'
  };
  const specialMessage = {
    h: 'Say: Hello World',
    t: 'Say: Toaster',
    m: "Say: Snakes on a plane!" 
  }
  if (key === '\u0003') {
    process.exit();
  }
  for (let letter in movement) {
    if (key === letter) {
      // console.log(movement[letter]);
      connection.write(movement[letter])
    }
  }
  for (let message in specialMessage) {
    if (key === message) {
      // console.log(movement[letter]);
      connection.write(specialMessage[message]);
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