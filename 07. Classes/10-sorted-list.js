class List {
  constructor() {
    this.list = [];
  }

  add(element) {
    this.list.push(element);
    return;
  }
  remove(index) {
    if (index >= 0 && index < this.list.length - 1) {
      this.list.splice(index, 1);
      return;
    } else {
      console.log("Error! Out of range exception!");
    }
  }
  get(index) {
    if (index >= 0 && index < this.list.length) {
      return this.list[index];
    } else {
      console.log("Error! Out of range exception!");
    }
  }
  size() {
    return this.list.length;
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
