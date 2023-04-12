/*
Usable commands:
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
***no 180s allowed
*/

const net = require("net");

connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.on('connection', () => {
    console.log('Connected! Congrats buddy!');
    //input name upon connection
    //set name, three letters, format Name: ---
    conn.write('Name: CEB');
  });

  conn.on('data', (data) => {
    console.log(data);
  });
    
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;

};

module.exports = connect;
