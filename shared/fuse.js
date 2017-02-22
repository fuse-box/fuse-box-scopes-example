const { FuseBox } = require("fuse-box");


const bundleA = FuseBox.init({
    homeDir: `${__dirname}/src-a`,
    outFile: `${__dirname}/build/a.js`,
}).bundle("**/**.ts")

const bundleB = FuseBox.init({
    homeDir: `${__dirname}/src-b`,
    outFile: `${__dirname}/build/b.js`,
}).bundle("**/**.ts")