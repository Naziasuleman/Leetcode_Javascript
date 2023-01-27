/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * } */
var minDepth = function (root) {
  //recursive
  if (!root) return 0;
  else if (!root.left && !root.right) return 1;
  else if (!root.left) return 1 + minDepth(root.right);
  else if (!root.right) return 1 + minDepth(root.left);
  else return 1 + Math.min(minDepth(root.left), minDepth(root.right));

  //Iterative approach
  //    if (!root) return 0;

  //     const que = [root];
  //     let minDepth = 1;

  //     while (que.length > 0) {
  //         let level = que.length;

  //         for (let i = 0; i < level; i++) {
  //             const curr = que.shift();
  //             if (!curr.left && !curr.right) return minDepth;
  //             if (curr.left) que.push(curr.left);
  //             if (curr.right) que.push(curr.right);
  //         }
  //         minDepth++;
  //     }
  //     return minDepth;
};
