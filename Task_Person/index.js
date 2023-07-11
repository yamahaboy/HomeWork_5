class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
class Student extends Person {
  constructor(name, age, gender, major) {
    super(name, age, gender);
    this.major = major;
  }

  getDetails() {
    console.log(`Student name: ${this.name}
Student age: ${this.age}
Student gender ${this.gender}
Student major: ${this.major}`);
  }
}

const student = new Student("John", 20, "Male", "JS");

student.getDetails();
