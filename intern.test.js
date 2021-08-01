// Intern Test Code

const Intern = require('../lib/Intern')

test('creates an intern object w/ name, id, & email', () => {

    const steve = new Employee('Steve', 12345, 'steve@gmail.com');

    expect(steve.name).toEqual(expect.any(String));
    expect(steve.id).toEqual(expect.any(Number));
    expect(steve.email).toContain('@');
    expect(steve.school).toEqual(expect.any(String));
});

test('getRole should return  Intern', () => {
    const testRole = "Intern";
    const steve = new Intern('Steve', 12345, 'steve@email.com', 'THE Univeristy');
    expect(steve.getRole()).toBe(testRole);
});