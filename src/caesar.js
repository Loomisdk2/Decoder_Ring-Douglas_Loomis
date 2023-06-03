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
