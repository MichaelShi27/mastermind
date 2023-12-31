export class DoublyLinkedList {
  constructor(head = null, tail = null, length = 0) {
    this.head = head;
    this.tail = tail;
    this.length = length;
  }

  insertAfterNode(data, insertLocation) {
    const node = new DLLNode(data, insertLocation, null);
    if (insertLocation === null)
      this.head = node;
    else {
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
}

export class DLLNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
} 
