"use strict";
const net = require('net');

const client = new net.Socket();

let tempjj = [];

client.on('data', chank => {
    let d = chank.toString();
    if (d.match(/200 OK/)) {
        d = d.split('200 OK\n')[1];
    }
    d = d.split('\nEOS');
    d.pop();
    for (let q of d) {
        tempjj.shift()(q + '\nEOS');
    }
});

module.exports = {
    setup: (HOST, PORT, OPT = ['-e2']) => new Promise((resolve, reject) => {
        client.connect(PORT, HOST, () => {
            client.write(`RUN ${OPT.join(' ')}\n`);
            resolve();
        });
    }),
    run: str => new Promise((resolve, reject) => {
        client.write(`${str}\n`);
        tempjj.push(resolve);
    })
};
