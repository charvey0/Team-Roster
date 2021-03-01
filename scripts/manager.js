const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    } // end constructor

    getOfficeNumber() {
        return this.officeNumber;
    } // end method

    getRole() {
        return "Manager";
    } //end method

} // end class

module.exports = Manager;