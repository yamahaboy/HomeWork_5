class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, job) {
    super(name, salary);
    this.job = job;
  }
  getDetails() {
    console.log(`Manager name: ${this.name}
Manager salary: ${this.salary}$
Manager job: ${this.job}
`);
  }
}
class Developer extends Employee {
  constructor(name, salary, lang) {
    super(name, salary);
    this.lang = lang;
  }
  getDetails() {
    console.log(`Developer name: ${this.name}
Developer salary: ${this.salary}$
Developer lang: ${this.lang}
`);
  }
}

const manager = new Manager("Alex", 2100, "Front End Teamlead");
const developer = new Developer("Peter", 3000, "C++");

manager.getDetails();
developer.getDetails();
