const Manager = require("../lib/Manager.js");

test("creates a manager object", () => {
  const manager = new Manager("AJ", "1", "fake@email.gov", "1");

  expect(manager.name).toBe("AJ");
  expect(manager.id).toBe("1");
  expect.stringContaining(manager.email.toString());
  expect.stringContaining(manager.officeNumber.toString());
});
