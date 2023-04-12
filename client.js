const net = require("net");
const { IP, PORT } = require("./constants");

connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connection', () => {
    console.log('Connected! Congrats buddy!');
    //set name, three letters, format Name: ---
    conn.write('Name: CEB');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
    
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;

};

module.exports = connect;
