var hasPathSum = function (root, targetSum) {
  const dfs = (root, sum) => {
    if (!root) return false;
    sum += root.val;

    if (!root.left && !root.right) return sum === targetSum;
    return dfs(root.left, sum) || dfs(root.right, sum);
  };

  return dfs(root, 0);
};
