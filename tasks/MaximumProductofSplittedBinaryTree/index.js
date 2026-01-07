const cache = new Map();

const getTreeSum = (node) => {
    if (!node) {
        return 0;
    }

    if (cache.has(node)) {
        return cache.get(node);
    }

    const sum = node.val + getTreeSum(node.right) + getTreeSum(node.left);

    cache.set(node, sum);
    return sum;
};

function maxProduct(root) {
    let currMax = 0;
    const treeSum = getTreeSum(root);
    const findMaxProducts = (node) => {
        const fromNodeSum = getTreeSum(node);
        const updatedTreeSum = treeSum - fromNodeSum;

        currMax = Math.max(currMax, fromNodeSum * updatedTreeSum )

        if (node.left) {
            findMaxProducts(node.left);
        }

        if (node.right) {
            findMaxProducts(node.right);
        }
    }

    if (root.left) {
        findMaxProducts(root.left);
    }

    if (root.right) {
        findMaxProducts(root.right);
    }

    const mod = 1e9+7;

    return currMax % mod;
}

module.exports = maxProduct;