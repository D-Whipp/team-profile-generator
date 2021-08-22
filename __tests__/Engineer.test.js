const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
    const engineer = new Engineer("Marcus");

    expect(engineer.name).toBe("Marcus");
})