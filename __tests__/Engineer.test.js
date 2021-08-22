const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer("Marcus", 2, "fake@city.edu", "fake@git.hub");

  expect.stringContaining(engineer.name.toString());
  expect(engineer.id).toEqual(expect.any(Number));
  expect.stringContaining(engineer.email.toString());
  expect.stringContaining(engineer.gitHub.toString());
});
