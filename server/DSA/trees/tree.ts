export function Node(val = 0, left = null, right = null) {
  (this.value = val), (this.left = left), (this.right = right);
}

export default function tree() {
  function node(data?) {
    this.data = data;
    this.left = this.right = null;
  }

  node.prototype.build = function (arr) {
    this.data = arr[0];
    let children = [this];
    let l = 1;

    while (l < arr.length) {
      let c = [];
      for (let child of children) {
        child.left = new node(arr[l++]);
        child.right = new node(arr[l++]);
        c.push(child.left, child.right);
      }
      children = c;
    }
  };

  /** node order traversal */
  node.prototype.dfs = function () {
    const arr = [];

    function dcheck(node) {
      if (node?.data) {
        arr.push(node.data);
        dcheck(node.left);
        dcheck(node.right);
      } else return;
    }

    dcheck(this);

    return arr;
  };

  /** level order traversal */
  node.prototype.bfs = function () {
    const arr = [];

    function dcheck(level) {
      while (level.length) {
        const nextlevel = [];
        for (let node of level) {
          if (node == null) continue;
          if (node.data) arr.push(node.data);
          nextlevel.push(node.left, node.right);
        }
        level = nextlevel;
      }
    }

    function dcheck_queue(nodes) {
      let i = 0;
      while (nodes[i]) {
        if (nodes[i]?.data) {
          arr.push(nodes[i].data);
          nodes.push(nodes[i].left, nodes[i].right);
          i++;
        }
      }
    }

    dcheck_queue([this]); // dcheck([this])

    return arr;
  };

  const n = new node();
  n.build([1, 2, 3, 4, 5, 6, 7]);

  console.log(n);

  console.log(n.dfs());

  console.log(n.bfs());
}
