const romChars = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1_000,
};

const supportingSubstractions = {
   [romChars.I]: [romChars.V, romChars.X],
   [romChars.X]: [romChars.L, romChars.C],
   [romChars.C]: [romChars.D, romChars.M],
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let value = 0;

    for (let i = 0; i < s.length; i++) {
        const num = romChars[s[i]];
        const next = romChars[s[i + 1]];

        if (supportingSubstractions[num]?.includes(next)) {
            value += next - num;
            i++;
            continue;
        }

        value += num;
    }

    return value;
};

module.exports = { romanToInt };