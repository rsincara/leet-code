// TODO
// Time Limit Exceeded
// 950 / 1004 testcases passed
const CAESAR = {
    'a': 'b',
    'b': 'c',
    'c': 'd',
    'd': 'e',
    'e': 'f',
    'f': 'g',
    'g': 'h',
    'h': 'i',
    'i': 'j',
    'j': 'k',
    'k': 'l',
    'l': 'm',
    'm': 'n',
    'n': 'o',
    'o': 'p',
    'p': 'q',
    'q': 'r',
    'r': 's',
    's': 't',
    't': 'u',
    'u': 'v',
    'v': 'w',
    'w': 'x',
    'x': 'y',
    'y': 'z',
    'z': 'a',
};

const map = {};

const OPERATIONS_COUNT = Object.keys(CAESAR).length;

/**
 * @param {string[]} words
 * @return {number}
 */
var countPairs = function(words) {
    const setByWord = {};

    for (let i = 0; i < words.length - 1; i++) {
        const word = words[i];

        const set = new Set();
        let changedWord = word;

        if (!(word in setByWord)) {
            for (let i = 0; i < OPERATIONS_COUNT; i++) {
                set.add(changedWord);
                changedWord = makeCaesar(changedWord);
            }
            setByWord[word] = set;
        }
    }

    let count = 0;

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            const wordA = words[i];
            const wordB = words[j];

            const setA = setByWord[wordA];

            if (setA.has(wordB)) {
                count++;
            }
        }
    }

    return count;
};

const makeCaesar = (word) => {
    if (map[word]) {
        return map[word];
    }

    const newWord = word.split('').map((char) => CAESAR[char]).join('');

    map[word] = newWord;

    return newWord;
};

module.exports = countPairs;