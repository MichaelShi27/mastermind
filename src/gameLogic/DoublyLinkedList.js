export class DoublyLinkedList {
  constructor(head = null, tail = null, length = 0) {
    this.head = head;
    this.tail = tail;
    this.length = length;
  }

  insertAfterNode(data, insertLocation) {
    const node = new DLLNode(data, insertLocation, null);
    if (insertLocation === null) {
      if (this.head !== null) {
        node.next = this.head;
        this.head.prev = node;
      }
      this.head = node;
    } else {
      node.next = node.prev.next;
      node.prev.next = node;
    }
    node.next && (node.next.prev = node);

    this.length++;
    if (insertLocation === this.tail)
      this.tail = node;
  }

  insertAtEnd(data) {
    const node = new DLLNode(data, this.tail, null);
    if (this.length === 0)
      this.head = node; 
    else
      this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  convertToArray = () => {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode);
      currentNode = currentNode.next;
    }
    return arr;
  };
}

export class DLLNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
} 
