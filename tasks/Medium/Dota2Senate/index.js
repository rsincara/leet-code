const _ = require('lodash');
const child_process = require("node:child_process");

/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = function (senate) {
    const r = [];
    const d = [];
    const n = senate.length;

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            r.push(i);
        } else {
            d.push(i);
        }
    }

    while (r.length > 0 && d.length > 0) {
        const radiant = r.shift();
        const dire = d.shift();

        if (radiant < dire) {
            r.push(radiant + n);
        } else {
            d.push(dire + n);
        }
    }

    return r.length > 0 ? 'Radiant' : 'Dire';
};

module.exports = predictPartyVictory;