// Converted to plain JavaScript so Node can run this file directly.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        console.log("Hello, my name is " + this.fullName);
    }
};

console.log(person.fullName);
person.greet();