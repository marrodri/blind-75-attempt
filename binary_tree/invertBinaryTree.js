/**
*
 */
var reverseTree = function (root) {
    var newRootNode = new TreeNode(root.val);
    //push
    if(!root.left){
        reverseTree(root.left);
    }
    if(!root.right){
        reverseTree(root.right);
    }
    return newRootNode
}
var pushNodeReversal = function (root, val) {
    if(root === null){
        root = new TreeNode(val, null, null);
        return root;
    }
    if(root.val >= val){
       //if the passed node 
       root.right = push(root.right, val);
    }
    if(root.val <= val){
        root.left = push(root.left, val);
    }
    return root;
}

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
