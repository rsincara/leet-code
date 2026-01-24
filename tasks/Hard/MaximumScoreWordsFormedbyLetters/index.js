const initChar = 97;

const maxScoreWords = function(words, letters, score) {
    let max = 0;

    const normalizedWords = words.map(word => word.split('').map(x => x.charCodeAt(0) - initChar));
    const normalizedLetters = letters.map(x => x.charCodeAt(0) - initChar);
    const lettersFreq = {};

    for (let i = 0; i < normalizedLetters.length; i++) {
        lettersFreq[normalizedLetters[i]] = (lettersFreq[normalizedLetters[i]] || 0) + 1;
    }

    const backtrack = (restWords, restFreq, sum) => {
        max = Math.max(max, sum);

        for (let i = 0; i < restWords.length; i++) {
            const word = restWords[i];

            const [canBeUsed, newFreq] = getCheckWithUpdatedFreq(word, restFreq);

            if (!canBeUsed) {
                continue;
            }

            const wordScore = getWordSum(word, score);
            backtrack(restWords.toSpliced(i, 1), newFreq, wordScore + sum);
        }
    };

    backtrack(normalizedWords, lettersFreq, 0);

    return max;
};

const getCheckWithUpdatedFreq = (word, freq) => {
    let canBeUsed = true;
    const newFreq = structuredClone(freq);

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (char in newFreq && newFreq[char] > 0) {
            newFreq[char]--;
        } else {
            canBeUsed = false;
            break;
        }
    }

    return [canBeUsed, newFreq];
};

const getWordSum = (word, score) => {
    return word.reduce((acc, letterIndex) => acc + score[letterIndex], 0);
};

module.exports = maxScoreWords;