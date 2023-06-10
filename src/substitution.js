// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


// The input could include spaces and letters as well as special characters such as #, $, *, etc.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
// All the characters in the alphabet parameter must be unique. Otherwise, it should return false.


const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // alphabet must exist and be 26 characters long
if(!alphabet || alphabet.length !== 26) return false;

// Global Variables
const realAlphaArray = "abcdefghijklmnopqrstuvwxyz".split("");
const inputArray = input.toLowerCase().split();
const subAlphaArray = alphabet.toLowerCase().split("");

// Substitution alphabet cannot have any repeated characters
const onlyUniqueChars = subAlphaArray.filter(
  (item, index, self) => self.indexOf(item) === index);
  if(onlyUniqueChars.length !== alphabet.length) return false;

  const encodeMessage = () => {
    let result = [];
    const encode = (char) => {
      const charIndex = realAlphaArray.indexOf(char);
      const encodedChar = subAlphaArray[charIndex];
      result.push(encodedChar);
    };
    inputArray.forEach((char) => {
      // Keeps space or encodes character
      char === " " ? result.push(" ") : encode(char);
    });
    return result.join("");
    };

    const decodeMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = subAlphaArray.indexOf(char);
        const decodedChar = realAlphaArray[charIndex];
        result.push(decodedChar);
      };
      inputArray.forEach((char) => {
        // Keeps space or encodes character
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };

    // Errors now handled, decide next to encode or decode
    return encode ? encodeMessage() : decodeMessage();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
