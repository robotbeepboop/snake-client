const { Server } = require("http");
const net = require("net");
const client = require('./client');
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();
// establishes a connection with the game server
const connect = function () {
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
};

console.log("Connecting ...");
connect();
