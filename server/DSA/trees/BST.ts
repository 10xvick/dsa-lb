
function Node(val=0,left=null,right=null){
  this.val = val,this.left=left,this.right=right;
}

function BST(values){
  this.root = null;
  values.forEach(value=> this.root = this.insert(this.root,value));
}

BST.prototype.insert = function(root,value){
  if(root==null) return new Node(value);
  if(value < root.val){
    root.left = this.insert(root.left,value)
  }else root.right = this.insert(root.right,value)
  return root;
}

export default function BST_() {
  console.log('BST');

  const values = [10,8,21,7,27,5,4,3]
  const bst = new BST(values);
  console.dir( bst, {depth:null});

}
