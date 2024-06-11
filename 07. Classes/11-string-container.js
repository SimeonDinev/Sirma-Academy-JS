class StringContainer {
  constructor(initialStr, stringLength) {
    this.initialStr = initialStr;
    this.stringLength = stringLength;
    this.str = initialStr;
  }

  decrease(length) {
    if (length >= this.str.length) {
      this.str = "...";
    } else {
      this.str = this.str.slice(0, this.str.length - length) + "...";
    }
    return;
  }

  increase(length) {
    if (length >= this.initialStr.length) {
      this.str = this.initialStr;
    } else {
      this.str = this.initialStr.slice(0, length) + "...";
    }
  }

  toString() {
    return this.str;
  }
}

//Tests
let test = new StringContainer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te... // The asnwer here maybe have to be 'T...'

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
