const Employee = require('./employee')

class Engineer extends Employee {
    constructor(type, certs, name) {
      super("micklitodev", "404-332-1234");
      this.type = type;
      this.certs = certs;
      this.name = name;
    }
  }

module.exports = Engineer;