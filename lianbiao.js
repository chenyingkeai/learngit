/*提前说明一下，代码大部分是抄的，注释是自己的理解
自己真的写不出来。。。写完这次注释，可能勉强能写*/
function Node ( element ) {
        this.element = element; //当前节点的元素  
        this.next = null; //下一个节点的元素    
    } 
function LList () {
        //LinkedList类提供了对链表进行操作的方法
        this.head = new Node('head'); //头节点
        this.find = find; //查找节点
        this.insert = insert; //插入节点
        this.remove = remove; //删除节点
        this.findPrev = findPrev; //查找前一个节点
        this.display = display; //显示链表
}
    
function find ( item ) {
    var currNode = this.head;
    while ( currNode.element != item ){//判别是否是所寻找节点
        currNode = currNode.next;//循环下一个直到找到该节点
    }
    return currNode;
}
function insert ( newElement , item ) {//（新节点，所要插入位置前节点）
    var newNode = new Node( newElement );//新节点是newNode
    var currNode = this.find( item );//已知节点是currNode
    newNode.next = currNode.next;//item后的数据后移,给新节点腾位置
    currNode.next = newNode;//把newNode拼接到currNode上
}
/*对insert有疑问：27、28行的赋值是循环的吗？后面第一位占了后面
第二位的位置后，第二位是如何实现后移的？*/
function display ()//显示链表
{//通过循环显示链表的每一位
    var currNode = this.head;//从头开始
    while ( !(currNode.next == null) ){
        console.log( currNode.next.element );
        currNode = currNode.next;
    }
}
//找出要删除的节点（目标节点前）
function findPrev( item ) {//查找节点
    var currNode = this.head;//循环找出
    while ( !( currNode.next == null) && ( currNode.next.element != item )){
        currNode = currNode.next;
    }
    return currNode;
}

function remove ( item ) {//把要删除节点后面所有向前移动覆盖
    var prevNode = this.findPrev( item );
    if( !( prevNode.next == null ) ){
        prevNode.next = prevNode.next.next;
    }
}//不需要改变链表长度吗？
//测试
var number = new LList();
number.insert('1','head');
number.insert('2','1');
number.insert('3','2');
number.insert('4','3');
number.insert('5','4');
number.remove(3);
console.log(number.display());
