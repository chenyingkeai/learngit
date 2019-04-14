/*实际上这段代码参考与某博客
我所写的代码有bug，光是往树插入数据都做不到
仔细地读了这段代码，并且自己从头到尾敲了一遍
*/

function Node(date,left,right){//初始化节点样式
    this.date = date;
    this.left = left;
    this.right = right;
    this.show = show;//不太明白这个的作用，将这个函数与show函数联系起来？
}
function show(){//返回中间数
    return this.date;
}
function BST() {//初始化树
    this.root = null;
    this.insert = insert;
}
function insert(date){//将键插入树中
    var n = new Node(date,null,null);
    if(this.root == null){//若根是空的键就是根
        this.root = n;
    }
    else{//若不是空的则移到下一层
        var current = this.root;
        var parent;
    while(true){//一直循环直到break
        parent = current;//将上一个节点定为父节点
        if(date < current.date){//搜索树小的往左
            current = current.left;//此节点的左节点成为下节点
        if(current == null){
            parent.left = n;//循环直到一个空的节点
            break;//跳出寻找节点的循环
        }   
    }
    else{//大的往右走，直到遇到空节点跳出循环
        current = current.right;
        if(current == null){
            parent.right = n;
            break;
        }
    }
}
}}
//递归：函数引用函数本身
/*先打印左子树（左子节点）
接着打印父节点
最后打印右子树（右子节点）*/
function inOrder(node) {
    if (!(node == null)) {
     inOrder(node.left);//先将左边节点全部打印
     console.log(node.show() + " ");//然后输出中间节点
     inOrder(node.right);//最后将全部右节点输出
    }
  }
  /*
  先序遍历就是，先打印父节点
  然后是左子节点（左子树）
  然后再打印右子节点（子树）。 
  */
  function preOrder(node) {
    if (!(node == null)) {
     console.log(node.show() + " ");//先输出最开始的父节点
     preOrder(node.left);//将左节点作为带入函数输出，将左子树全部输出
     preOrder(node.right);//最后将右节点带入函数全部输出
    }
  }
//测试
function BST() {//给树添加可用函数
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
bst.preOrder(bst.root);