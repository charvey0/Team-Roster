const Team = require("../scripts/team");
const Engineer = require("../scripts/engineer");
const Intern = require("../scripts/intern");
const Manager = require("../scripts/manager");
const Employee = require("../scripts/employee");



describe("Team", () => {
  describe("addEmployee", () => {
    it("Initialize an instant of the Team class", () => {

      const team = new Team();
     
      expect(team).not.toBeNull();
    });
  });

/*  describe("addIntern", () => {
    it("should add the intern's name to the roster", () => {
      const roster = ["Manager's Name", "Intern's Name"];

      const intern = new Intern("Intern's Name", 1, "intern@somemail.com", "University of Somewhere");
      const manager = new Manager("Manager's Name", 1, "manager@somemail.com", 12);
      const team = new Team(manager);
      team.add(intern);
     
      expect(team.getRoster()).toEqual(roster);
    });
  });

  describe("addEngineer", () => {
    it("should add the engineer's name to the roster", () => {
        const roster = ["Manager's Name", "Engineer's Name"];
  
        const engineer = new Engineer("Engineer's Name", 1, "engineer@somemail.com", "ngineer");
        const manager = new Manager("Manager's Name", 1, "manager@somemail.com", 12);
        const team = new Team(manager);
        team.add(engineer);
       
        expect(team.getRoster()).toEqual(roster);
    });
  });
  */
});
