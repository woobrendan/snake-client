const IP = 'localhost';
const PORT = 50541;

const sendMessage = {
  'w': 'Move: up', 
  'a': "Move: left",
  's': 'Move: down', 
  'd': 'Move: right',
  h: 'Say: Hello World',
  t: 'Say: Toaster',
  m: "Say: Snakes on a plane!" 
}

module.exports = {
  IP,
  PORT,
  sendMessage
}