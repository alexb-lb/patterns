/**
 * Composite pattern.
 * object-based
 *
 * Composes objects into tree-like structures to represent whole-part hierarchies.
 * In this pattern, each node in the tree-like structure can be either an individual object
 * or a composed collection of objects. Regardless, each node is treated uniformly.
 * The easiest way to think about this is with the example of a multi-level menu
 */

// Root
class Component {
  constructor(name) {
    this._name = name;
  }

  getNodeName() { return this._name }

  // abstract methods that need to be overridden
  getType() { }
  addChild(component) { }
  getChildByIndex(index) { }
  numberOfChildren() { }

  static logTreeStructure(root) {
    let treeStructure = '';

    function traverse(node, indent = 0) {
      treeStructure += `${'--'.repeat(indent)}${node.getNodeName()}\n`;
      indent++;
      for (let i = 0, length = node.numberOfChildren(); i < length; i++) {
        traverse(node.getChildByIndex(i), indent);
      }
    }

    traverse(root);
    return treeStructure;
  }
}

// Leaf
class Leaf extends Component {
  constructor(name) {
    super(name);
    this._type = 'Leaf Node';
  }

  getType() { return this._type }
  numberOfChildren() { return 0 }
}


// Composite
class Composite extends Component {
  constructor(name) {
    super(name);
    this._type = 'Composite Node';
    this._children = [];
  }

  getType() { return this._type }
  addChild(component) { this._children = [...this._children, component] }
  getChildByIndex(index) { return this._children[index] }
  numberOfChildren() {  return this._children.length }
}

// usage
const tree = new Composite('root');

tree.addChild(new Leaf('leaf'));

const branch = new Composite('branch');
tree.addChild(branch);

branch.addChild(new Leaf('branch-leaf-left'));
branch.addChild(new Leaf('branch-leaf-right'));

const branchMid = new Composite('branch-mid');
branch.addChild(branchMid);

branchMid.addChild(new Leaf('branch-mid-leaf-left'));
branchMid.addChild(new Leaf('branch-mid-leaf-right'));

// log
console.log(Component.logTreeStructure(tree));
/*
 root
 --leaf
 --branch
 ----branch-leaf-left
 ----branch-leaf-right
 ----branch-mid
 ------branch-mid-leaf-left
 ------branch-mid-leaf-right
*/
