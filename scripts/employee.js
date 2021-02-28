class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    } //end cons

    getName() {
        return this.name;
    } //end method

    getId() {
        return this.id;
    } //end method

    getEmail() {
        return this.email;
    } //end method

    getRole() {
        return "Employee";
    } //end method

    setName(name) {
        this.name = name;
    } //end method

    setId(id) {
        this.id = id;
    } //end method

    setEmail(email) {
        this.email = email;
    } //end method

} // end class

module.exports = Employee;