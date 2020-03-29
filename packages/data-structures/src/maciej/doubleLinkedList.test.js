const DoubleLinkedList = require('./doubleLinkedList');

it('checking an empty list', () => {
    const obj = new DoubleLinkedList();
    expect(obj.head).toBe(null);
    expect(obj.tail).toBe(null);
  });

  it('checking rending list', () => {
    const obj = new DoubleLinkedList();
    obj.push(1);
    obj.push(2);
    obj.push(3);
    expect(obj.printList()).toStrictEqual([1,2,3]);
  });

  it('checking if list is empty', () => {
    const obj = new DoubleLinkedList();
    obj.push(1);
    expect(obj.isEmpty()).toBe(false);
  });

  it('checking if list is empty', () => {
    const obj = new DoubleLinkedList();
    obj.push(1);
    expect(obj.isEmpty()).toBe(false);
  });

  it('adds new Node', () => {
    const obj = new DoubleLinkedList();
    obj.push(1);
    obj.push(2);
    obj.insert(3,'4')
    console.log(obj.next)
    expect(obj.tail.next).toBe(null);
  });

  it('testing pop function', () => {
    const obj = new DoubleLinkedList();
    obj.push(1);
    obj.push(2);
    obj.pop()
    expect(obj.length).toBe(1);
  });

  it('testing pop function', () => {
    const obj = new DoubleLinkedList();
    obj.push(1);
    obj.push(2);
    obj.pop();
    console.log(obj.length)
    expect(obj.length).toBe(1);
  });
