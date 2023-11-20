// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 1) PUSH

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  // 2) POP

  pop() {
    if (!this.head) return undefined;
    let iteration = this.head;
    let newTail = null;
    while (iteration.next) {
      newTail = iteration;
      iteration = iteration.next;
    }
    this.tail = newTail;
    if (this.length > 1) {
      this.tail.next = null;
    }
    if (!this.length) return undefined;
    this.length -= 1;
    return iteration;
  }

  // SHIFT

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }
}

const list = new SinglyLinkedList();

list.push(20);
