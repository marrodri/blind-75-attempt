class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * print binary tree
 */
var preOrderTraversal = (root, funct) => {};

/**
 * print binary tree
 */
var printBinaryTree = (root) => {
  console.log(root.val);
  if (root.left) {
    printBinaryTree(root.left);
  }
  if (root.right) {
    printBinaryTree(root.right);
  }
  return;
};

/**
 * push new item
 */
/**
 * @param {TreeNode} root
 * @param {int} val
 * @return {TreeNode}
 */
var pushBinaryTree = (root, val) => {
  if (!root) {
    root = new TreeNode(val, null, null);
    return root;
  }
  if (root.val >= val) {
    root.left = pushBinaryTree(root.left, val);
  } else {
    root.right = pushBinaryTree(root.right, val);
  }
  return root;
};

/**
 * reverse Tree function
 */
var reverseTree = function (root) {
  var newRootNode = new TreeNode(root.val);
  //push
  if (!root.left) {
    reverseTree(root.left);
  }
  if (!root.right) {
    reverseTree(root.right);
  }
  return newRootNode;
};
var pushNodeReversal = function (root, val) {
  if (root === null) {
    root = new TreeNode(val, null, null);
    return root;
  }
  if (root.val >= val) {
    //if the passed node
    root.right = push(root.right, val);
  }
  if (root.val <= val) {
    root.left = push(root.left, val);
  }
  return root;
};

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  var inverseTree = TreeNode(root.val, null, null);

  /*
   **
   */
  return inverseTree;
};

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
var input = [4, 2, 7, 1, 3, 6, 9];
var binaryTree = null;
for (var i = 0; i < input.length; i++) {
  console.log(input[i]);
  binaryTree = pushBinaryTree(binaryTree, input[i]);
}
console.log("binary tree printing in order traversal:");
printBinaryTree(binaryTree);
console.log("=====================================");
