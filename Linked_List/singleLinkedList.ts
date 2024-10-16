class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  head: ListNode;
  constructor(val: number) {
    let newNode = new ListNode(val);
    this.head = newNode;
    this.head.next = null;
  }
  //insert new node at the last
  addEndNode(val: number) {
    const newNode = new ListNode(val);
    let current = this.head;
    while (current?.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  //add node at the start
  addStartNode(val: number) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }
  deleteLastNode() {
    let current = this.head;
    while (current?.next?.next) {
      current = current.next;
    }
    current.next = null;
  }
  //delete first node from the list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      if (current.next === null) break;
      current = current.next;
    }
  }
}

let list = new SingleLinkedList(1);
list.addStartNode(2);
list.display();
