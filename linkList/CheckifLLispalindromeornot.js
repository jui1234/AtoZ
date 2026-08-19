
let isPalindrome=function(head){
    const arr=[];
    let current=head
    while(current!==null){
        arr.push(current.val);
        current=current.next;
    }

    let left=0;
    let right=arr.length-1;

    while(left<right){
        if(arr[left]!==arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;

}

class LinkList{
    constructor(val){
      this.val=val;
      this.next=null;
    }
}

const node1= new LinkList(10);
const node2=new LinkList(20);
const node3= new LinkList(30);
const node4=new LinkList(40);
const node5=new LinkList(50);


node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;



console.log("isPalindrome",isPalindrome(node1))