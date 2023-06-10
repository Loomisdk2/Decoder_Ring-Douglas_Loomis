const { expect } = require("chai");
const { caesar } = require("../src/caesar");
// done
describe("caesar() submission tests written by Douglas Loomis", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "lego magazine";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
// done
    it("should return false if the shift amount is above 25", () => {
      const message = "lego magazine";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
// done
    it("should return false if the shift amount is less than -25", () => {
      const message = "lego magazine";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });
// done
  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "cornpops";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "fruqsrsv";

      expect(actual).to.equal(expected);
    });
// done
    it("should leaves spaces and other symbols as is", () => {
      const message = "a space.";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d vsdfh.";

      expect(actual).to.equal(expected);
    });
// done
    it("should ignore capital letters", () => {
      const message = "A Capital";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d fdslwdo";

      expect(actual).to.equal(expected);
    });
// done
    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "brazen walrus";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "eudchq zdouxv";

      expect(actual).to.equal(expected);
    });
// done
    it("should allow for a negative shift that will shift to the left", () => {
      const message = "brazen walrus";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "yoxwbk txiorp";

      expect(actual).to.equal(expected);
    });
  });
// done
  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "ghfrgh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "decode";

      expect(actual).to.equal(expected);
    });
// done
    it("should leave spaces and other symbols as is", () => {
      const message = "d vsdfh.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a space.";

      expect(actual).to.equal(expected);
    });
// done
    it("should ignore capital letters", () => {
      const message = "D fdslwdo.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a capital.";

      expect(actual).to.equal(expected);
    });
// done
    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "eudchq zdouxv";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "brazen walrus";

      expect(actual).to.equal(expected);
    });
// done
    it("should allow for a negative shift that will shift to the left", () => {
      const message = "yoxwbk txiorp";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "brazen walrus";

      expect(actual).to.equal(expected);
    });
  });
});