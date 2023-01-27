/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var levelOrder = function (root) {
  //Iterative approach
  if (!root) return [];
  let que = [root],
    res = [];

  while (que.length > 0) {
    let temp = [];
    let level = que.length;
    for (let i = 0; i < level; i++) {
      let curr = que.shift();
      temp.push(curr.val);
      curr.left && que.push(curr.left);
      curr.right && que.push(curr.right);
    }
    res.push(temp);
  }
  return res;

  //    recursive
  //    if(!root) return [];
  //     const res = [];

  //     const finder = (curr, level) => {

  //         (res[level]) ? res[level].push(curr.val): res.push([curr.val]);
  //         curr.left && finder(curr.left, level + 1);
  //         curr.right && finder(curr.right, level + 1);
  //     }
  //     finder(root, 0);
  //     return res;
};