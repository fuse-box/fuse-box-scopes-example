const a = require("./build/a");
const b = require("./build/b");

const libA = a.FuseBox.import("./lib/a").LibA;
new libA();