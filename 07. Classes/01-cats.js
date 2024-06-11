class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  meow() {
    console.log(`${this.name}, age ${this.age} says meow`);
  }
}

function unpackageArrayOfCats(arr) {
  for (let i = 0; i < arr.length; i++) {
    let [name, age] = arr[i].split(" ");
    let cat = new Cat(name, age);
    cat.meow();
  }
}

unpackageArrayOfCats(["Mellon 2", "Tom 3"]);
unpackageArrayOfCats(["Branch 1", "Poppy 3", "Goldy 2"]);
