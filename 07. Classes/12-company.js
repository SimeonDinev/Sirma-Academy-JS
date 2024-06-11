class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department || salary < 0) {
      throw new Error("Invalid input!");
    }

    if (!this.departments[department]) {
      this.departments[department] = [];
    }

    this.departments[department].push({ name, salary, position });

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestDept = null;
    let bestAvgSalary = 0;

    for (const dept in this.departments) {
      const totalSalary = this.departments[dept].reduce(
        (acc, emp) => acc + emp.salary,
        0
      );
      const avgSalary = totalSalary / this.departments[dept].length;

      if (avgSalary > bestAvgSalary) {
        bestAvgSalary = avgSalary;
        bestDept = dept;
      }
    }

    if (bestDept === null) return "";

    const sortedEmployees = this.departments[bestDept].sort((a, b) => {
      if (b.salary === a.salary) {
        return a.name.localeCompare(b.name);
      }
      return b.salary - a.salary;
    });

    let result = `Best Department is: ${bestDept}\nAverage salary: ${bestAvgSalary.toFixed(
      2
    )}\n`;

    for (const emp of sortedEmployees) {
      result += `${emp.name} ${emp.salary} ${emp.position}\n`;
    }

    return result.trim();
  }
}

// Example usage:
let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "support", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
