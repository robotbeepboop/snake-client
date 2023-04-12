const { connect } = require("http2");
const { stdin } = require("process");
let connection;

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

stdin.on("data", handleUserInput);

const handleUserInput = function () {
  //check for
  /*
  Usable commands:
  "Move: up" - move up one square (unless facing down)
  "Move: down" - move down one square (unless facing up)
  "Move: left" - move left one square (unless facing right)
  "Move: right" - move left one square (unless facing left)
  ***no 180s allowed
  */

  stdin.on('data', (key) => {
    if (key === '\u0003') { //crtl + c input to quit game
      process.stdout.write('Thanks for playing!');
      process.exit();
    }

    if (key === 'k') {
      connection.write('Say: Kachow!');
    }

    if (key === 's') {
      connection.write('Say: ssssssweet!');
    }
    
    if (key === 'w') {
      connection.write('Move: up');
    }

    if (key === 's') {
      connection.write('Move: down');
    }

    if (key === 'a') {
      connection.write('Move: left');
    }

    if (key === 'd') {
      connection.write('Move: right');
    }

  });
  
};

module.exports = setupInput;
