"use strict";
const net = require('net');

const client = new net.Socket();

let tempjj = [];
let tempstr = "";

client.on('data', chank => {
    let d = chank.toString();
    tempstr += d;
    if (d.includes('200 OK')) {
        d = d.split('200 OK\n')[1];
        tempstr = d;
    }

    if (d.includes('\nEOS')) {
        tempjj.shift()(tempstr.replace(/^\n/g, ''));
        tempstr = "";
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
