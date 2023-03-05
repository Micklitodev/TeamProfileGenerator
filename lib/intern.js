const Employee = require('./employee');

class Intern extends Employee {
    constructor(type, certs, name) {
        super("theintern", "404-332-1234");
        this.type = type;
        this.certs = certs;
        this.name = name;
      }
}

module.exports = Intern; 