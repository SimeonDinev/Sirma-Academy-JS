class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(pointOne, pointTwo) {
    return Math.sqrt(
      Math.abs(pointOne.x - pointTwo.x) ** 2 +
        Math.abs(pointOne.y - pointTwo.y) ** 2
    );
  }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
