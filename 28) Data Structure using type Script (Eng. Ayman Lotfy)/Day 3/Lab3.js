// Problem 1: Binary Search Tree (BST)

class BSTNode {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new BSTNode(value);
    if (this.root == null) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current) {
      if (value < current.data) {
        if (current.left == null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else if (value > current.data) {
        if (current.right == null) {
          current.right = node;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  printInOrder() {
    this._printInOrder(this.root);
  }

  _printInOrder(node) {
    if (node == null) return;
    this._printInOrder(node.left);
    console.log(node.data);
    this._printInOrder(node.right);
  }
}

const bst = new BST();
bst.insert(40);
bst.insert(60);
bst.insert(25);
bst.insert(70);
bst.insert(33);
bst.insert(12);
bst.insert(55);
console.log("Problem 1: In-Order Traversal (sorted):");
bst.printInOrder();


// Problem 2: Queue implemented with a linked list

class QueueNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new QueueNode(value);
    if (this.front == null) {
      this.front = this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.front == null) return null;
    const value = this.front.data;
    this.front = this.front.next;
    if (this.front == null) {
      this.back = null;
    }
    this.size--;
    return value;
  }

  peek() {
    return this.front ? this.front.data : null;
  }

  isEmpty() {
    return this.front == null;
  }
}

const queue = new Queue();
queue.enqueue(7);
queue.enqueue(14);
queue.enqueue(21);
queue.enqueue(28);
console.log("Problem 2: Peek (front):", queue.peek());
console.log("Problem 2: Dequeue:", queue.dequeue());
console.log("Problem 2: Dequeue:", queue.dequeue());
console.log("Problem 2: Dequeue:", queue.dequeue());
console.log("Problem 2: Dequeue:", queue.dequeue());
console.log("Problem 2: Dequeue (empty):", queue.dequeue());
console.log("Problem 2: isEmpty:", queue.isEmpty());


// Problem 3: Stack implemented with a linked list

class StackNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new StackNode(value);
    if (this.top == null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;
  }

  pop() {
    if (this.top == null) return null;
    const value = this.top.data;
    this.top = this.top.next;
    this.size--;
    return value;
  }

  peek() {
    return this.top ? this.top.data : null;
  }

  isEmpty() {
    return this.top == null;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(15);
stack.push(25);
stack.push(35);
console.log("Problem 3: Peek (top):", stack.peek());
console.log("Problem 3: Pop:", stack.pop());
console.log("Problem 3: Pop:", stack.pop());
console.log("Problem 3: Pop:", stack.pop());
console.log("Problem 3: Pop:", stack.pop());
console.log("Problem 3: Pop (empty):", stack.pop());
console.log("Problem 3: isEmpty:", stack.isEmpty());
