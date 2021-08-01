// Engineer Test Code

const Engineer = require("../lib/Engineer");

test('creates a empoyee object w/ name, id, & email', () => {

  const steve = new Engineer('Steve', 12345, 'steve@email.com', 'steveGitHub');

  expect(steve.name).toEqual(expect.any(String));
  expect(steve.id).toEqual(expect.any(Number));
  expect(steve.email).toContain('@');
  expect(steve.github).toEqual(expect.any(String))
});

test('getRole should return  Engineer', () => {
  const testRole = "Engineer";
  const steve = new Engineer('Steve', 12345, 'steve@email.com', 'steveGitHub');
  expect(steve.getRole()).toBe(testRole);
});