const sum = require('./sum');

beforeAll(() => {
    return "initializeCityDatabase()";
  });
  
  afterAll(() => {
    return "clearCityDatabase()";
  });


test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('object assignment create object to matches', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

test('adding positive numbers is not zero. Negative assertions case to check', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
        }
    }
});

test('null value test assertions', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
test('zero value test assertions', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('two plus two addition assertions', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
  
test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

const arrayList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
test('to check list contain milk or not ', () => {
    expect(arrayList).toContain('milk');
    expect(new Set(arrayList)).toContain('milk');
});

