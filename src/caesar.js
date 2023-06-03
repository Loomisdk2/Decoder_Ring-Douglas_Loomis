// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    /* your solution code here
    The user will input a message.
    The decoder will shift the coding alphabet the amount idicated (L (-) or R (+)).
    If the message is to be encoded then encode = true. For decoding encode = false.
    For decoding the fn will shift the opposite direction indicated.
    Notes* 
    1. If the shift value is set to 0, less than -25, or greater than 25 it should return false
    2. Spaces and other nonalphabetical symbols should be maintained
    3. Capital letter are ignored (toLowercase)
    4. If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), 
    it should wrap around to the front of the alphabet (e.g., z becomes c).
    */

    // Fn will take in an input (message)
    // User will choose to encode (true) or decode (false)
    // Fn will shift the alphabet the indicated amount, either L (-) or R (+) (between -25 and 25)
    // Fn will ?return ?console.log result

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
