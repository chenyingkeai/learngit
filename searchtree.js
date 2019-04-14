function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
  }
  function show() {
    return this.data;
  }
   
  function BST() {
    this.root = null;
    this.insert = insert;
  }
  function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
     this.root = n;
    }
    else {
     var current = this.root;
     var parent;
     while (true) {
       parent = current;
       if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
       }
       else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
       }
     }
    }
  }
  function inOrder(node) {
    if (!(node == null)) {
     inOrder(node.left);
     console.log(node.show() + " ");
     inOrder(node.right);
    }
  }
  function preOrder(node) {
    if (!(node == null)) {
     console.log(node.show() + " ");
     preOrder(node.left);
     preOrder(node.right);
    }
  }
   
  // 给BST类添加该成员方法
  function BST() {
    this.root = null;
    this.insert = insert;
    this.preOrder = preOrder;
    this.inOrder = inOrder;
  }
  var bst = new BST();
  var nums = [10,3,18,2,4,13];
  for(var i = 0;i<nums.length;i++){
      bst.insert(nums[i]);
  }
bst.inOrder(bst.root);