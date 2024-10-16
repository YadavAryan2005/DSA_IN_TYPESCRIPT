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
  addNode(val: number) {
    const newNode = new ListNode(val);
    let current = this.head;
    while (current?.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  deleteLastNode() {
    let current = this.head;
    while (current?.next?.next) {
      current = current.next;
    }
    current.next = null;
  }
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
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.display();
list.deleteLastNode();
console.log("delete last elemetn");
list.display();
