class Team {
    constructor(manager) {
        this.manager = manager;
        this.roster = [];
        this.roster.push(manager.getName());
    } // end constructor

    add(emp) {
        this.roster.push(emp.getName());
    } // end method

    getRoster() {
        return this.roster;
    } //end method

} // end class

module.exports = Team;