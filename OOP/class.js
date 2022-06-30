// Classes should be capitalized
class Student{
    // Constructor initializes the object created with some default properties
    constructor(firstName, lastName, year = "Graduated") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.points = 0;

    }

    // Instance method is a a method that belongs to instances of a class, but not the class itself
    // Provides functionality pertainting to a specific instance
    // For example here we are printing the full name of the student instance created
    fullName() {
        return `Full name is: ${this.firstName} ${this.lastName}`;
    }

    addPoint() {
        this.points++;
        return `Number of points added: ${this.points}`
    }
    
    
}

// Creating intances of the student object
let firstStudent = new Student('Tommy', 'Persaud');
let secondStudent = new Student('Mega', 'Bibble');

// Updating the student year
firstStudent.year = "Testing"

console.log(firstStudent.fullName(), firstStudent.addPoint())
