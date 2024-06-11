class Student {
  constructor(name, grade, averageScore) {
    this.name = name;
    this.grade = grade;
    this.averageScore = averageScore;
  }

  checkingAverageScore() {
    if (this.averageScore < 3) {
      return false;
    }
    return true;
  }

  passToNextGrade() {
    this.grade++;
  }
}

function printOutput(array) {
  let studentsPassed = extreactPassedStudents(array);

  let orderedKeys = orderKeys(studentsPassed);

  for (let i = 0; i < orderedKeys.length; i++) {
    let studentNamesList = [];
    let averageGrade = 0;
    console.log(orderedKeys[i] + " grade");

    for (let j = 0; j < studentsPassed.length; j++) {
      if (orderedKeys[i] === studentsPassed[j].grade) {
        studentNamesList.push(studentsPassed[j].name);
        averageGrade += Number(studentsPassed[j].averageScore);
      }
    }
    console.log("List of students: " + studentNamesList.join(", "));
    console.log(
      "Average annual score from last year: " +
        (averageGrade / studentNamesList.length).toFixed(2)
    );
    console.log("===");
  }
}

function extreactPassedStudents(array) {
  let studentsPassed = [];
  for (let i = 0; i < array.length; i++) {
    const line = array[i].split(", ");

    let studenName = line[0].split(": ")[1];
    let studentGrade = line[1].split(": ")[1];
    let studentAverageScore = line[2].split(": ")[1];

    const student = new Student(studenName, studentGrade, studentAverageScore);

    if (student.checkingAverageScore()) {
      student.passToNextGrade();
      studentsPassed.push(student);
    }
  }
  return studentsPassed;
}

function orderKeys(studentsPassed) {
  let orderedKeys = new Set();
  studentsPassed.forEach((s) => {
    orderedKeys.add(s.grade);
  });
  orderedKeys = Array.from(orderedKeys).sort((a, b) => a - b);
  return orderedKeys;
}

printOutput([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);

// printOutput([
//   "Student name: George, Grade: 5, Graduated with an average score: 2.75",
//   "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
//   "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
//   "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
//   "Student name: John, Grade: 9, Graduated with an average score: 2.90",
//   "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
//   "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
// ]);
