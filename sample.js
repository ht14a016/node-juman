"use strict";
// let juman = require('node-juman');
let juman = require('./index');
const hiraToKata = str => str.replace(/[\u3041-\u3096]/g, x => String.fromCharCode(x.charCodeAt(0) + 0x60));

(async () => {
    await juman.setup('localhost', 32000, ['-b', '-e2']);
    // let pp = await juman.run("吉田豪　漫画家・平松伸二を語る 　平松伸二先生と安東弘樹アナのシンクロ率がパネェ！");
    // console.log(pp);
    let pp3 = await juman.run("平松伸二はスゴイなぁ／「お酒は飲まないけど、その分漫画の中でいっぱい悪さをしている。女が出れば強姦するし、人は殺すし。僕の中にあるドロドロした部分は全部漫画の中に吐き出している」 / “吉田豪　漫画家・平松伸二を語る” ".replace(/\n/g, '　'));
    console.log(pp3);

    let pp4 = pp3.replace(/\nEOS\n|\nEOS/g, '').split('\n');
    console.log(pp4);
    let score = (pp4.map(x => {
        let p = x.split(' ');
        return {
            surface_form: p[0],
            reading: hiraToKata(p[1])
        };
    }));
    console.log(score);
    process.exit();
})();