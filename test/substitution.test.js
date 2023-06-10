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
// done
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "cheesefries";
      const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "eittatysota";

      expect(actual).to.equal(expected);
    });
// done
    it("should work with any kind of key with unique characters", () => {
      const message = "cheesefries";
      const alphabet = ".wertyui0plkjhgfd$azxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "eittaty$0ta";

      expect(actual).to.equal(expected);
    });
// done
    it("should preserve spaces", () => {
      const message = "my space";
      const alphabet = ".wertyui0plkjhgfd$azxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "jn af.et";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
// done
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "eittatysota";
      const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "cheesefries";

      expect(actual).to.equal(expected);
    });
// done
    it("should work with any kind of key with unique characters", () => {
      const message = " jn af.et";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "my space";

      expect(actual).to.equal(expected);
    });
// done
    it("should preserve spaces", () => {
      const message = "jn af.et";
      const alphabet = ".wertyui0plkjhgfd$azxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "my space";

      expect(actual).to.equal(expected);
    });
  });
});