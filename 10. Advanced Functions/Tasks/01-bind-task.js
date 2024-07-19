const obj1 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const obj2 = {
  name: "Bob",
};

obj1.greet();

const newFunc = obj1.greet.bind(obj2, obj2.name);

newFunc();
