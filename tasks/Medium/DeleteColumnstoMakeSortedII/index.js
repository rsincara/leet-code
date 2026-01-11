const isSorted = (strs) => {
    let sorted = true;

    for (let i = 1; i < strs.length; i++) {
        if (strs[i] < strs[i - 1]) {
            sorted = false;
        }
    }

    return sorted;
};

// console.log(isSorted(["xc","yb","za"]))

const removeFirstChars = (strs) => {
    for (let i = 0; i < strs.length; i++) {
        strs[i] = strs[i].substring(1)
    }
};

// const arr = ["xc","yb","za"];
// console.log(arr)
// removeFirstChars(arr);
// console.log(arr)

var minDeletionSize = function(strs) {
    let i = 0;

    while (strs.length > 0 && !isSorted(strs)) {
        i++;
        removeFirstChars(strs);
    }

    return i;
};

module.exports = minDeletionSize;