export class LinkedList {
  constructor(head = null, tail = null, length = 0) {
    this.head = head;
    this.tail = tail;
    this.length = length;
  }

  insertAfterNode(data, insertLocation) {
    const node = new LLNode(data, null);
    if (insertLocation === null) {
      if (this.head !== null)
        node.next = this.head;
      this.head = node;
    } else {
      node.next = insertLocation.next;
      insertLocation.next = node;
    }

    this.length++;
    if (insertLocation === this.tail)
      this.tail = node;
  }

  insertAtEnd(data) {
    const node = new LLNode(data, null);
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

class LLNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
} 
