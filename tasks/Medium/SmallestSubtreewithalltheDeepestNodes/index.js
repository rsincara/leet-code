const subtreeWithAllDeepest = function (root) {
    let deepestNodes = [];
    let deepestNodesLevel = 0;
    const parentByNode = new Map();

    const getDeepestNodes = (node, level) => {
        if (level === deepestNodesLevel) {
            deepestNodes.push(node);
        }

        if (level > deepestNodesLevel) {
            deepestNodes = [node];
            deepestNodesLevel = level;
        }

        if (node.left) {
            parentByNode.set(node.left, node);
            getDeepestNodes(node.left, level + 1);
        }

        if (node.right) {
            parentByNode.set(node.right, node);
            getDeepestNodes(node.right, level + 1);
        }
    };

    getDeepestNodes(root, 1)

    console.log(deepestNodes, deepestNodesLevel)
    console.log('parentByNode ', parentByNode)

    if (deepestNodes.length === 1) {
        return deepestNodes[0];
    }

    let foundParent = null;
    let checkingNodes = [...deepestNodes];

    while (!foundParent) {
        const parentsSet = new Set();

        for (let i = 0; i < checkingNodes.length; i++) {
            const parent = parentByNode.get(checkingNodes[i]);
            parentsSet.add(parent);
        }

        let isCommonParent = parentsSet.size === 1;

        const parentsSetArr = Array.from(parentsSet);

        if (isCommonParent) {
            foundParent = parentsSetArr[0];
        } else {
            checkingNodes = parentsSetArr;
        }
    }

    return foundParent;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(0);

root.left = new TreeNode(1);

root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(6);

root.left.right = new TreeNode(2);

root.left.right.left = new TreeNode(5);
root.left.right.right = new TreeNode(4);

console.log('result: ', subtreeWithAllDeepest(root));

module.exports = subtreeWithAllDeepest;