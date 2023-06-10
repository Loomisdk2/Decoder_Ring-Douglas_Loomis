const { expect } = require("chai");
const { substitution } = require("../src/substitution");
// done
describe("substitution() submission tests written by Douglas Loomis", () => {
  describe("error handling", () => {
// done
    it("should return false if the substitution alphabet is missing", () => {
      const message = "cheesefries";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });
// done
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "cheesefries";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
// done
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "cheesefries";
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
//
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "cheesefries";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "ykrrpik";

      expect(actual).to.equal(expected);
    });
//
    it("should work with any kind of key with unique characters", () => {
      const message = "message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "ysii.rs";

      expect(actual).to.equal(expected);
    });
//
    it("should preserve spaces", () => {
      const message = "my message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "yp ysii.rs";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
//
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
//
    it("should work with any kind of key with unique characters", () => {
      const message = "ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
//
    it("should preserve spaces", () => {
      const message = "yp ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });
  });
});