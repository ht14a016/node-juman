"use strict";
// let juman = require('node-juman');
let juman = require('./index');
(async () => {
    await juman.setup('localhost', 32000, ['-b', '-e2']);
    let pp = await juman.run("【HBO】「夏休み明け、死にたいくらい辛いなら、学校に行くな！」前川喜平・前文科省事務次官が子供たちに呼びかけ  　いやらし い目で子供を見ながら講演してるんだろうな〜");
    console.log(pp);
    let pp3 = await juman.run("本日もは晴天なり");
    console.log(pp3);
    process.exit();
})();