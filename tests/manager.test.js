const Manager = require("../scripts/team");

describe("Manager", () => {
  describe("officeNumber", () => {
      it("should return the manager's office number", () => {
        const num = 12;
  
        const manager = new Manager("Manager's Name", 1, "manager@somemail.com", 12);
        const result = manager.getOfficeNumber();
        expect(result).toEqual(num);
      });
  });

  describe("getRole", () => {
    it("should return the manager's role", () => {
      const str = "Manager";

      const manager = new Manager("Manager's Name", 1, "manager@somemail.com", 12);
      const result = manager.getRole();
      expect(result).toEqual(str);
    });
  });
});