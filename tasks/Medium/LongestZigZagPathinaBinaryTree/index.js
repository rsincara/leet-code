const _ = require('lodash');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    let count = 0;

    const track = (node, path, dist) => {
        if (node && node[path]) {
            dist++;
            count = Math.max(count, dist);

            track(path === 'left' ? node.left : node.right, path === 'left' ? 'right' : 'left', dist);
        }
        if (node) {
            track(path === 'left' ? node.right : node.left, path,1 );
        }
    };

    track(root, 'left', 0);
    track(root, 'right', 0);

    return count;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(8);

root.right.right.left.right = new TreeNode(6);
root.right.right.left.right.right = new TreeNode(7);

console.log(longestZigZag(root));

module.exports = longestZigZag;