/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let tail = null;
  let head = null;

  function getHead() {
    return head

  }
  function getTail() {
    return tail
  }
  function add(x) {
    const newNode = {}
    newNode.value = x
    newNode.next = null;
    if (!tail) {
      tail = newNode;
      head = newNode;
    } else {
      tail.next = newNode
      tail = newNode
    }
    return newNode
  }
  function get(index) {
    let count = 0;
    let blank = head;
    while (blank && count <= index) {
      if (count === index) {
        return blank;
      } else {
        count++;
        blank = blank.next;
      }
    }
    return false;
  }
  function remove(num) {

    let nextNode = get(num + 1);
    let currentNode = get(num);
    let counter = 0
    let previousNode = get(num - 1);
    if (num === 0) {
      head = nextNode
    }
    if (currentNode.next === null) {
      tail = previousNode;
      tail.next = null
    } else {
      previousNode.next = nextNode
    }
    return false;
  }
  function insert(value, number) {
    let previousNode = get(number - 1);
    let currentNode = get(number);
    let newNode = {};
    newNode.value = value;
    newNode.next = null;
    if (!currentNode) {
      
      return false
    } else if(!previousNode) {
      newNode.next = head;
      head = newNode;
    } else {
      newNode.next = currentNode;
      previousNode.next = newNode;
    }
      
    }
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    insert: insert,
    get: get
  }
}
  
