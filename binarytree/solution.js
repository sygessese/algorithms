var symmetricTree = function (root, mirror = root) {
  if (root === null && mirror === null) {
    return true;
  }
  if (root === null || mirror === null) {
    return false;
  }

  return symmetricTree(root.left, mirror.right) && symmetricTree(root.right, mirror.left) && (root.val === mirror.val)
};

module.exports = symmetricTree;