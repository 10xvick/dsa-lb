import { traversal } from "./traversal";
import { Node } from "./tree";

function BST(values) {
  this.root = null;
  values.forEach((value) => (this.root = this.insert(this.root, value)));
}

BST.prototype.insert = function (root, value) {
  if (root == null) return new Node(value);
  if (value < root.value) {
    root.left = this.insert(root.left, value);
  } else root.right = this.insert(root.right, value);
  return root;
};

BST.prototype.search = function (root, value) {
  if (root == null || root.value == value) return root;
  if (value < root.value) return this.search(root.left, value);
  return this.search(root.right, value);
};

BST.prototype.search_iterative = function (root, value) {
  let node = root;
  while (node) {
    if (node.value == value) return node;
    node = value < node.value ? node.left : node.right;
  }
  return node;
};

BST.prototype.min = function (root) {
  return root?.left ? this.min(root.left) : root;
};

BST.prototype.max = function (root) {
  return root?.right ? this.max(root.right) : root;
};

BST.prototype.delete = function (root, value) {
  if (!root) return null;

  if (root.value == value) {
    if (root.left == null && root.right == null) {
      return null;
    } else if (root.left == null || root.right == null) {
      return root.left || root.right;
    } else {
      const min = this.min(root.right);
      root.value = min.value;
      root.right = this.delete(root.right, min.value);
      return root;
    }
  } else if (value < root.value) root.left = this.delete(root.left, value);
  else root.right = this.delete(root.right, value);
  return root;
};

BST.prototype.balanced = function () {
  const inorder = traversal.inorder(this.root);

  function tree(min, max) {
    if (min > max) return;
    const mid = Math.floor((min + max) / 2);
    return new Node(inorder[mid], tree(min, mid - 1), tree(mid + 1, max));
  }

  return tree(0, inorder.length - 1);
};

/**
 * todo:-------------------------------------
 *
 * inorder predecessor and inorder successor
 *
 */

export default function BST_() {
  console.log("BST");

  const values = [10, 8, 21, 7, 6, 27, 5, 4, 3];
  const bst = new BST(values);
  const root = bst.root;
  console.dir(bst, { depth: null });
  console.dir({ "balanced BST": bst.balanced() }, { depth: null });
  console.log("level order traversal ", traversal.levelorder(root));
  console.log("inorder traversal of bst ", traversal.inorder(root));
  console.log("search 3 in bst", bst.search(root, 3));
  console.log("min in bst", bst.min(root));
  console.log("max in bst", bst.max(root));
  console.log("A" + 1);
}
