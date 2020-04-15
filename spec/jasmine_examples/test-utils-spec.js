import { getRandomNumber, getRandomString } from '../../cypress/test-utils.js';

describe("test-utils", function () {
  it("getRandomNumber shall return a number", function () {
    expect(typeof getRandomNumber(0, 10) === 'number').toEqual(true);
  });

  it("getRandomString shall return a string", function () {
    expect(typeof getRandomString(10) === 'string').toEqual(true);
  });
});
