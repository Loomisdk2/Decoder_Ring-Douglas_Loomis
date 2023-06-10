const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by Douglas Loomis", () => {
    describe("encoding a message", () => {
// done
        it("should encode a message by translating each letter to number pairs", () => {
            const message = "polybius"
            const actual = polybius(message)
            const expected = "5343134521425434"

            expect(actual).to.equal(expected);
        });
// done
        it("should translate both 'i' and 'j' to 42", () => {
            const message = "injury"
            const actual = polybius(message)
            const expected = "423342542445"

            expect(actual).to.equal(expected);
        });
// done
        it("should leave spaces as is", () => {
            const message = "a space"
            const actual = polybius(message)
            const expected = "11 3453113151"

            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
// done
        it("should decode a message by translating each pair of numbers into a letter", () => {
          const message = "5343134521425434";
          const actual = polybius(message, false);
          const expected = "polyb(i/j)us";
    
          expect(actual).to.equal(expected);
        });
// done
        it("should translate 42 to both 'i' and 'j'", () => {
            const message = "423342542445";
            const actual = polybius(message, false);
            const expected = "(i/j)n(i/j)ury";
      
            expect(actual).to.equal(expected);
          });
// done
          it("should leave spaces as is", () => {
            const message = "11 3453113151";
            const actual = polybius(message, false);
            const expected = "a space";
      
            expect(actual).to.equal(expected);
          });
// done
          it("should return false if the length of all numbers is odd", () => {
            const message = "4341414";
            const actual = polybius(message, false);
            const expected = false;
      
            expect(actual).to.equal(expected);
          });
        });
    });
