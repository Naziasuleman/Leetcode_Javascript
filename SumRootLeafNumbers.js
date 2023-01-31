var sumNumbers = function (root) {
  const dfs = (node, sum) => {
    if (!node) return 0;

    sum = sum * 10 + node.val;
    if (!node.left && !node.right) return sum;

    return dfs(node.left, sum) + dfs(node.right, sum);
  };
  return dfs(root, 0);
};
