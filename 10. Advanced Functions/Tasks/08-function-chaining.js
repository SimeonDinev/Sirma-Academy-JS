class stringManipulator {
  constructor() {
    this.value = "";
  }

  setValue(w) {
    this.value = w;
    return this;
  }
  toUpperCase() {
    this.value = this.value.toUpperCase();
    return this;
  }
  toLowerCase() {
    this.value = this.value.toLowerCase();
    return this;
  }
  print() {
    console.log(this.value);
    return this;
  }
}
let stringManipulatorr = new stringManipulator();
stringManipulatorr
  .setValue("Hello")
  .toUpperCase()
  .print()
  .toLowerCase()
  .print();

// HELLO
// hello
