const Employee = require('./employee')

class Engineer extends Employee {
    constructor(certs, name) {
      super("micklitodev", "404-332-1234");
      this.certs = certs;
      this.name = name;
    }
  }

module.exports = Engineer;