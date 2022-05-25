const sum = require("../solution-izaferreira");
const input = (arr) => arr.join("\n");

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => input([1, 2])),
}));

describe("Test iza Solution", () => {
  it("return true", () => {
    expect(sum()).toBe(3);
  });
});
