import { getStringInfo, StringUtils, toUpperCase } from "../app/utils";

describe('Utils test suite', () => {
  test('it should be return uppercase', () => {
    const result = toUpperCase('abc');
    expect(result).toBe('ABC');
  });
});
