/* Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. 
 * (i.e., from left to right, level by level from leaf to root).
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[15,7],[9,20],[3]]
 * 
 * Example 2:
 * Input: root = [1]
 * Output: [[1]]
 * 
 * Example 3:
 * Input: root = []
 * Output: []
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 */
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    var res = [];
    helper(root, 0, res);
    return res.reverse();
};

var helper = function (root, level, res) {
    if (!root) return;
    if (!res[level]) res[level] = [];
    res[level].push(root.val);
    helper(root.left, level + 1, res);
    helper(root.right, level + 1, res);
};

