class Laptop {
  isOn = false;

  constructor(info, quality) {
    this.info = info;
    this.quality = quality;
  }

  get price() {
    let calc = 800 - this.info.age * 2 + this.quality * 0.5;
    return calc;
  }

  turnOn() {
    this.isOn = true;
    this.quality--;
  }
  turnOff() {
    this.isOn = false;
    this.quality--;
  }
  showInfo() {
    return JSON.stringify(this.info);
  }
}

let info = { producer: "Asus", age: 2, brand: "Zenbook" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);
