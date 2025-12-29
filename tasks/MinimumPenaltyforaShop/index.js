/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let index = 0;
    let penalty = 0;

     for (const c of customers) {
         if (c === 'Y') {
             penalty++;
         }
     }

     let bestPenalty = penalty;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            penalty--;
        } else {
            penalty++;
        }

        if (penalty < bestPenalty) {
            bestPenalty = penalty;
            index = i + 1;
        }
    }

    return index;
};
module.exports = bestClosingTime;