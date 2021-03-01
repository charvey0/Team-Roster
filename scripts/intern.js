const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    } // end constructor

    getSchool() {
        return this.school;
    } // end method

    getRole() {
        return "Intern";
    } //end method

} // end class

module.exports = Intern;