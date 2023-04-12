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
    console.log('Server says: ', data);
  });
    
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;

};

module.exports = connect;
