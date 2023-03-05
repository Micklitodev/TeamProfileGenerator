const Employee = require('./employee');

class Manager extends Employee {
    constructor(type, certs, name) {
        super("themgmt", "404-332-1234");
        this.type = type;
        this.certs = certs;
        this.name = name;
      }
}

module.exports = Manager; 