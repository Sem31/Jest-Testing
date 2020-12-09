const sum = require('./sum');

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