const Intern = require("../scripts/intern");

describe("Intern", () => {
    describe("getSchool", () => {
      it("should return the intern's GitHub username", () => {
        const str = "University of Somewhere";
    
        const intern = new Intern("Intern's Name", 1, "intern@somemail.com", "University of Somewhere");
        const result = intern.getGithub();

        expect(result).toEqual(str);
      });
    });
  
    describe("getRole", () => {
      it("should return the intern's role", () => {
        const str = "Intern";
  
        const intern = new Intern("Intern's Name", 1, "intern@somemail.com", "University of Somewhere");
        const result = intern.getRole();

        expect(result).toEqual(str);
      });
    });
  });