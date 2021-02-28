const Engineer = require("../scripts/engineer");

describe("Engineer", () => {
    describe("getGithub", () => {
        it("should return the engineer's GitHub username", () => {
          const str = "GitHubUser";
    
          const engineer = new Engineer("Engineer's Name", 1, "engineer@somemail.com", "GitHubUser");
          const result = engineer.getGithub();
          expect(result).toEqual(str);
        });
    });
  
    describe("getRole", () => {
      it("should return the engineer's role", () => {
        const str = "Engineer";
  
        const engineer = new Engineer("Engineer's Name", 1, "engineer@somemail.com", "GitHubUser");
        const result = engineer.getRole();
        expect(result).toEqual(str);
      });
    });
  });