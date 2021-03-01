const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUser) {
        super(name, id, email);
        this.githubUser = githubUser;
    } // end constructor

    getGithub() {
        return this.githubUser;
    } // end method

    getRole() {
        return "Engineer";
    } //end method

} // end class

module.exports = Engineer;