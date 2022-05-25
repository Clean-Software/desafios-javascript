const prod = require("../solution-lakscastro");
const input = (arr) => arr.join("\n");

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => input([2, 6])),
}));

describe("Test lakscastro Solution", () => {
  it("return true", () => {
    expect(prod()).toBe(12);
  });
});
