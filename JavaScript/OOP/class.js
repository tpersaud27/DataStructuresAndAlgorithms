// Classes should be capitalized
class Student {
  // Constructor initializes the object created with some default properties
  constructor(firstName, lastName, year = "Graduated") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.points = 0;
    this.grades = [];
  }

  // Instance method is a a method that belongs to instances of a class, but not the class itself
  // Provides functionality pertainting to a specific instance
  // For example here we are printing the full name of the student instance created
  fullName() {
    return `Full name is: ${this.firstName} ${this.lastName}`;
  }

  addPoint() {
    this.points++;
  }

  addGrade(grade) {
    this.grades.push(grade);
    return `Grades: ${this.grades}`;
  }

  calculateAverage() {
    return `Average grade  ${this.grades.reduce(
      (previousValue, currentValue) => (previousValue + currentValue) / 2
    )}`;
  }

  // Class methods / Static methods
  // Static methods are called without instantiating their class and cannot be called through a class instance
  // Used to create utility functions for an application. Ex. returning distance between two points
  static enrollStudent() {
    return `New student enrolled`;
  }
}

// Creating intances of the student object
let firstStudent = new Student("Tommy", "Persaud");
let secondStudent = new Student("Mega", "Bibble");

// Updating the student year
firstStudent.year = "Testing";

firstStudent.addPoint();
firstStudent.addGrade(90);
firstStudent.addGrade(80);
firstStudent.addGrade(65);

console.log(firstStudent);
console.log(firstStudent.calculateAverage());
// Class methods are called by using the name of the class and invoking the method
console.log(Student.enrollStudent());
