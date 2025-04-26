class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append(value) {
    const newNode = new Node();
    newNode.setValue(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.setNext(newNode);
      this.tail = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node();
    newNode.setValue(value);
    newNode.setNext(this.head);
    this.head = newNode;
  }
  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }
  get ListHead() {
    return this.head;
  }
  get ListTail() {
    return this.tail;
  }
  at(index) {
    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }
  pop() {
    if (!this.head) return null;
    if (!this.head.nextNode) {
      this.head = null;
      this.tail = null;
    }
    let current = this.head;
    let previous = null;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
    this.tail = previous;
  }
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let current = this.head;
    let count = 1;
    while (current) {
      if (current.value === value) return count;
      current = current.nextNode;
      count++;
    }
    return null;
  }
  toString() {
    let stringList = "";
    let current = this.head;
    while (current) {
      stringList += `(${current.value}) -> `;
      current = current.nextNode;
    }
    stringList += "null";
    return stringList;
  }
  insertAt(value, index) {
    const newNode = new Node();
    newNode.setValue(value);
    let current = this.head;
    let previous = null;
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
      return;
    }
    let count = 1;
    while (current) {
      previous = current;
      current = current.nextNode;
      if (count === index) {
        previous.nextNode = newNode;
        newNode.nextNode = current;
        return;
      }
      count++;
    }
    return; //error out of slots
  }
  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.nextNode;
      if (!this.head) this.tail = null;
      return;
    }
    let current = this.head;
    let count = 1;
    let previous = null;
    while (current) {
      previous = current;
      current = current.nextNode;
      if (index === count) {
        previous.nextNode = current.nextNode;
        if (!current.nextNode) this.tail = previous;
        return;
      }
      count++;
    }
    return; //out of index
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
  setValue(value) {
    this.value = value;
  }
  setNext(next) {
    this.nextNode = next;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.at(1));
list.insertAt("eagle", 3);
list.removeAt(3);
const print = list.toString();
console.log(print);
