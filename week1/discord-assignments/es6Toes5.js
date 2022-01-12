// const packIt = (...args) => console.log(args);

// packIt(1, 2, 3, 5, 5);

function packIt() {
  var args = Object.values(arguments);
  console.log(args);
}

packIt(1, 2, 3, 5, 5);
