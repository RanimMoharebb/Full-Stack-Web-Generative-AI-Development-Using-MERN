// Problem 1: Single Linked List implementation and operations

// Node class for Single Linked List
class SNode {
  constructor(value) {
    this.val = value;      // Store the node value
    this.next = null;      // Pointer to the next node
  }
}

// Single Linked List class
class SLL {
  constructor() {
    this.head = null;      // First node in the list
    this.tail = null;      // Last node in the list
    this.length = 0;       // Number of nodes in the list
  }

  // Add a new node at the end of the list
  push(x) {
    var temp = new SNode(x);

    if (this.head == null) {
      this.head = this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }

    this.length++;
  }

  // Remove the last node from the list
  pop() {
    if (this.head == null) {
      return null;
    }

    if (this.head == this.tail) {
      var value = this.head.val;
      this.head = this.tail = null;
      this.length--;
      return value;
    }

    var temp = this.head;

    while (temp.next != this.tail) {
      temp = temp.next;
    }

    var value = this.tail.val;
    this.tail = temp;
    this.tail.next = null;
    this.length--;

    return value;
  }

  // Print all values in the list
  print() {
    var temp = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  // Search for a node by value
  search(val) {
    var temp = this.head;
    while (temp) {
      if (temp.val == val) {
        return temp;
      }
      temp = temp.next;
    }
    return null;
  }

  // Delete a node by value
  delete(val) {
    var temp = this.head;
    if (temp == null) {
      return;
    }

    if (this.head == this.tail && this.head.val == val) {
      this.head = this.tail = null;
      this.length--;
      return;
    }

    if (this.head.val == val) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    var prev = this.head;
    temp = this.head.next;

    while (temp) {
      if (temp.val == val) {
        prev.next = temp.next;
        if (temp == this.tail) {
          this.tail = prev;
        }
        this.length--;
        return;
      }
      prev = temp;
      temp = temp.next;
    }
  }

  // Remove the first node from the list
  shift() {
    if (this.head == null) {
      return null;
    }

    var value = this.head.val;
    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return value;
  }

  // Add a new node at the beginning of the list
  unshift(x) {
    var temp = new SNode(x);

    if (this.head == null) {
      this.head = this.tail = temp;
    } else {
      temp.next = this.head;
      this.head = temp;
    }

    this.length++;
  }

  // Get a node by its index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    var temp = this.head;
    var counter = 0;
    while (counter < index) {
      temp = temp.next;
      counter++;
    }
    return temp;
  }

  // Update the value of a node by index
  set(index, value) {
    var temp = this.get(index);
    if (temp == null) {
      return false;
    }
    temp.val = value;
    return true;
  }

  // Insert a new node at a specific index
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index == 0) {
      this.unshift(value);
      return true;
    }

    if (index == this.length) {
      this.push(value);
      return true;
    }

    var newNode = new SNode(value);
    var prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }
}

var s1 = new SLL();

s1.push(10);
s1.push(20);
s1.push(30);

console.log("Problem 1: Single Linked List - Print after push:");
s1.print();

console.log("Problem 1: Search 20:");
console.log(s1.search(20));

console.log("Problem 1: Pop:");
console.log(s1.pop());

console.log("Problem 1: Print after pop:");
s1.print();

console.log("Problem 1: Unshift 5:");
s1.unshift(5);
s1.print();

console.log("Problem 1: Shift:");
console.log(s1.shift());

console.log("Problem 1: Print after shift:");
s1.print();

console.log("Problem 1: Insert 15 at index 1:");
s1.insert(1, 15);
s1.print();

console.log("Problem 1: Get index 1:");
console.log(s1.get(1));

console.log("Problem 1: Set index 1 to 100:");
s1.set(1, 100);
s1.print();

console.log("Problem 1: Delete 100:");
s1.delete(100);
s1.print();


// Problem 2: Double Linked List implementation and operations

// Node class for Double Linked List
class Node {
  constructor(value) {
    this.val = value;      // Store the node value
    this.next = null;      // Pointer to the next node
    this.prev = null;      // Pointer to the previous node
  }
}

// Double Linked List class
class DLL {
  constructor() {
    this.head = null;      // First node in the list
    this.tail = null;      // Last node in the list
    this.length = 0;       // Number of nodes in the list
  }

  // Add a new node at the end of the list
  push(x) {
    var temp = new Node(x);

    if (this.head == null) {
      this.head = this.tail = temp;
    } else {
      this.tail.next = temp;
      temp.prev = this.tail;
      this.tail = temp;
    }

    this.length++;
  }

  // Remove the last node from the list
  pop() {
    if (this.head == null) {
      return null;
    }

    if (this.head == this.tail) {
      var value = this.head.val;
      this.head = this.tail = null;
      this.length--;
      return value;
    }

    var temp = this.tail;
    this.tail = temp.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp.val;
  }

  // Print all values in the list
  print() {
    var temp = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  // Search for a node by value
  search(val) {
    var temp = this.head;
    while (temp) {
      if (temp.val == val) {
        return temp;
      }
      temp = temp.next;
    }
    return null;
  }

  // Delete a node by value
  delete(val) {
    var temp = this.search(val);
    if (temp == null) {
      return;
    }

    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else if (this.head == temp) {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    } else if (this.tail == temp) {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    } else {
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      temp.next = null;
      temp.prev = null;
    }

    this.length--;
  }

  // Remove the first node from the list
  shift() {
    if (this.head == null) {
      return null;
    }

    var temp = this.head;
    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp.val;
  }

  // Add a new node at the beginning of the list
  unshift(x) {
    var temp = new Node(x);
    if (this.head == null) {
      this.head = this.tail = temp;
    } else {
      temp.next = this.head;
      this.head.prev = temp;
      this.head = temp;
    }

    this.length++;
  }

  // Get a node by index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    var temp;
    var counter;
    if (index <= this.length / 2) {
      temp = this.head;
      counter = 0;
      while (counter < index) {
        temp = temp.next;
        counter++;
      }
    } else {
      temp = this.tail;
      counter = this.length - 1;
      while (counter > index) {
        temp = temp.prev;
        counter--;
      }
    }

    return temp;
  }

  // Update node value by index
  set(index, value) {
    var temp = this.get(index);
    if (temp == null) {
      return false;
    }

    temp.val = value;
    return true;
  }

  // Insert a new node at a specific index
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index == 0) {
      this.unshift(value);
      return true;
    }

    if (index == this.length) {
      this.push(value);
      return true;
    }

    var newNode = new Node(value);
    var before = this.get(index - 1);
    var after = before.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }
}

var l1 = new DLL();

l1.push(10);
l1.push(20);
l1.push(30);

console.log("Problem 2: Double Linked List - Print after push:");
l1.print();

console.log("Problem 2: Search 20:");
console.log(l1.search(20));

console.log("Problem 2: Pop:");
console.log(l1.pop());

console.log("Problem 2: Print after pop:");
l1.print();

console.log("Problem 2: Unshift 5:");
l1.unshift(5);
l1.print();

console.log("Problem 2: Shift:");
console.log(l1.shift());

console.log("Problem 2: Print after shift:");
l1.print();

console.log("Problem 2: Insert 15 at index 1:");
l1.insert(1, 15);
l1.print();

console.log("Problem 2: Get index 1:");
console.log(l1.get(1));

console.log("Problem 2: Set index 1 to 100:");
l1.set(1, 100);
l1.print();

console.log("Problem 2: Delete 100:");
l1.delete(100);
l1.print();


// Problem 3: Fibonacci recursion
function fib(i) {
  if (i == 0) {
    return 0;
  } else if (i == 1) {
    return 1;
  } else {
    return fib(i - 1) + fib(i - 2);
  }
}

console.log("Problem 3: Fibonacci values");
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
