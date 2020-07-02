const { Calculator } = require('./Calculator');

test("1 + 2", () => {
  expect(Calculator("1 + 2")).toEqual(3);
});

test("1 + 2 + 3 + 4 + 5", () => {
    expect(Calculator("1 + 2 + 3 + 4 + 5")).toEqual(15);
  });

test("1 - 2 * 3 + 4 + 5", () => {
expect(Calculator("1 - 2 * 3 + 4 + 5")).toEqual(6);
});
