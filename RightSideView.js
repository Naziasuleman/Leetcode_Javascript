var rightSideView = function (root) {
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
    res.push(temp.at(-1));
  }
  return res;

  //recursive
  //   const res = [];
  //   const finder = (curr, level, res) => {
  //     if (!curr) return;

  //     if (res.length === level) res.push(curr.val);

  //     finder(curr.right, level + 1, res);
  //     finder(curr.left, level + 1, res);
  //   };

  //   finder(root, 0, res);
  //   return res;
};
