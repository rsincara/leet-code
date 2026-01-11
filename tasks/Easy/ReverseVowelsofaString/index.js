/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
    const vowelsReg = /[aeiou]/gi;
    let vowelsFromWord = s.match(vowelsReg);

    if (!vowelsFromWord) {
        return s;
    }

    vowelsFromWord.reverse();

    let updatingIndex = 0;

    return s.split('').map((char) => {
        if (/[aeiou]/i.test(char)) {
            updatingIndex++;
            return vowelsFromWord[updatingIndex - 1];
        }

        return char;
    }).join('');
};

console.log(reverseVowels('IceCreAm'))

module.exports = reverseVowels;