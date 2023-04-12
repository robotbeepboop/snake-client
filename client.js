const net = require("net");

const clientConnect = {
  connect: function () {
    const conn = net.createConnection({
      host: 'localhost',
      port: 50541,
    });
    conn.on('data', (data) => {
      console.log(data)
    });
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    return conn;
  }
}

module.exports = clientConnect;
