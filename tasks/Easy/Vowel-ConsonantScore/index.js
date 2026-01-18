/**
 * @param {string} s
 * @return {number}
 */
const vowelConsonantScore = function(s) {
   const isVowel = (char) => {
       if (char === 'a') return true;
       if (char === 'e') return true;
       if (char === 'i') return true;
       if (char === 'o') return true;
       return char === 'u';
   }

   let v = 0;
   let c = 0;

    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            v++;
        } else if (s[i] !== ' ' && !/\d/.test(s[i])) {
            c++;
        }
    }

    if (c > 0) {
        return Math.floor(v/c);
    }

    return 0;
};

module.exports = vowelConsonantScore;