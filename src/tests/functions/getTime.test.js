import getTime from "../../functions/getTime";

describe("getTime", () => {
  test("eg 1", () => {
    const result = getTime(25 * 60);
    const expected = "25:00";
    expect(result).toEqual(expected);
  });

  test("eg 2", () => {
    const result = getTime(1400);
    const expected = "23:20";
    expect(result).toEqual(expected);
  });
});
