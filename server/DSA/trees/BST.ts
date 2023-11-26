import { traversal } from "./traversal";
import { Node } from "./tree";

function BST(values){
  this.root = null;
  values.forEach(value=> this.root = this.insert(this.root,value));
}

BST.prototype.insert = function(root,value){
  if(root==null) return new Node(value);
  if(value < root.value){
    root.left = this.insert(root.left,value)
  }else root.right = this.insert(root.right,value)
  return root;
}

BST.prototype.search = function(root,value){
  if(root==null || root.value == value) return root;
  if(value< root.value) return this.search(root.left,value);
  return this.search(root.right,value)
}

BST.prototype.search_iterative = function(root,value){
  let node = root;
  while(node){
    if(node.value == value) return node;
    node = value<node.value? node.left : node.right;
  }
  return node;
}

export default function BST_() {
  console.log('BST');

  const values = [10,8,21,7,27,5,4,3]
  const bst = new BST(values);
  console.dir( bst, {depth:null});
  console.log('level order traversal ',traversal.levelorder(bst.root))
  console.log('inorder traversal of bst ',traversal.inorder(bst.root))
  console.log('search 3 in bst', bst.search(bst.root, 3 ))
}
