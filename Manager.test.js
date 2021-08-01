// Manager Test code

const Manager = require("../lib/Manager");

test('creates a empoyee object w/ name, id, & email', () => {

  const steve = new Manager('Steve', 12345, 'steve@email.com', '123-456-7890');

  expect(steve.name).toEqual(expect.any(String));
  expect(steve.id).toEqual(expect.any(Number));
  expect(steve.email).toContain('@');
  expect(steve.officeNumber).toEqual(expect.any(String))
});

test('getRole should return  Manager', () => {
  const testRole = "Manager";
  const steve = new Manager('Steve', 12345, 'steve@email.com', '123-456-7890');
  expect(steve.getRole()).toBe(testRole);
});