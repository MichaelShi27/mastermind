import { MAX_HIGH_SCORES_COUNT } from '../constants.js';

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
    if (insertLocation === this.tail)
      this.tail = node;

    if (this.length === MAX_HIGH_SCORES_COUNT) {
      const temp = this.head;
      this.head = this.head.next;
      temp.next = null;
    } else
      this.length++;
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
