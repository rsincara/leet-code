/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function(nums1, nums2) {
    return [
        Array.from(new Set(nums1.filter(x => !nums2.includes(x)))),
        Array.from(new Set(nums2.filter(x => !nums1.includes(x)))),
    ];
};

module.exports = findDifference;