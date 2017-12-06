"use strict";
// let juman = require('node-juman');
let juman = require('./index');
(async () => {
    await juman.setup('localhost', 32000, ['-b', '-e2']);
    let pp = await juman.run("本日は晴天なり");
    console.log(pp);
    let pp3 = await juman.run("本日もは晴天なり");
    console.log(pp3);
    process.exit();
})();