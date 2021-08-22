const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Paige", 4, "fake@city.edu", "Fake School");

  expect.stringContaining(intern.name.toString());
  expect(intern.id).toEqual(expect.any(Number));
  expect.stringContaining(intern.email.toString());
  expect.stringContaining(intern.school.toString());
});
