class Stack {
  constructor(data) {
    this.data = data ?? [];
  }

  push(element) {
    this.data.push(element);
    return this.data;
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  size() {
    return this.data.length;
  }

  print() {
    console.log(this.data);
  }

  isEmpty() {
    return this.size() == 0;
  }

  reverse() {
    let data = new Stack([]);
    let dataOriginal = [...this.data];
    while (!this.isEmpty()) {
      data.push(this.pop());
    }
    this.data = [...dataOriginal];
    return data;
  }

  clone() {
    return new Stack(this.data);
  }
}

module.exports = Stack;
