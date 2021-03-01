class Team {
    constructor(manager) {
        this.manager = manager;
        this.members = [];
        this.members.push(manager);
    } // end constructor

    add(emp) {
        this.members.push(emp);
    } // end method

    getRoster() {
        var roster = [];
        this.members.forEach((emp) => {
            roster.push(emp.getName());
        });
        return roster;
    } //end method

    getMembers() {
        return this.members;
    }

} // end class

module.exports = Team;