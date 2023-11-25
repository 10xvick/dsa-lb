import BST from './DSA/trees/BST';
import tree from './DSA/trees/tree';

function callall(...fns) {
  fns.forEach((e) => e());
}

callall(tree, BST);

console.log('xyzabc');
