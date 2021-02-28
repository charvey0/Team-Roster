const Employee = require("../scripts/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return the name of the employee", () => {

      const str = "John Doe";

      const employee = new Employee("John Doe", 1, "johndoe@somemail.com");
      const result = employee.getName();

      expect(result).toEqual(str);
    });
  });

  describe("getId", () => {
    it("should return the id of the employee", () => {

      const id = 1;

      const employee = new Employee("John Doe", 1, "johndoe@somemail.com");
      const result = employee.getId();

      expect(result).toEqual(id);
    });
  });  

  describe("getEmail", () => {
    it("should return the email of the employee", () => {

      const str = "johndoe@somemail.com";
 
      const employee = new Employee("John Doe", 1, "johndoe@somemail.com");
      const result = employee.getEmail();

      expect(result).toEqual(str);
    });
  });

  describe("getRole", () => {
    it("should return the role of the employee", () => {

      const str = "Employee";

      const employee = new Employee("John Doe", 1, "johndoe@somemail.com");
      const result = employee.getRole();

      expect(result).toEqual(str);
    });
  });
});
