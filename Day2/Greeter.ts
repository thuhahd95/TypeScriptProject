class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    //Class method
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");//creating an instance of the Greeter class
console.log(greeter.greet()); // Output: Hello, world
