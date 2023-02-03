var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  const dfs = (root) => {
    if (!root) return 0;

    const lh = dfs(root.left);
    const rh = dfs(root.right);

    diameter = Math.max(diameter, lh + rh);
    return 1 + Math.max(lh, rh);
  };
  dfs(root);
  return diameter;
};
