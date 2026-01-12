/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s = '';

    if (chars.length === 1) {
        return 1;
    }

    let charCount = 1;

    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        const nextChar = chars[i + 1];

        if (char !== nextChar) {
            if (charCount === 1) {
                s+=char;
            } else {
                s+=`${char}${charCount}`;
            }
            charCount = 1;
            continue;
        }

        charCount++;
    }

    for (let i = 0; i < s.length; i++) {
        chars[i] = s[i];
    }

    return s.length;
};

module.exports = compress;