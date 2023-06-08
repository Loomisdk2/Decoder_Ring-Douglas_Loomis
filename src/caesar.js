// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Notes:
 /* your solution code here
    The user will input a message.
    The decoder will shift the coding alphabet the amount idicated (L (-) or R (+)).
    If the message is to be encoded then encode = true. For decoding encode = false.
    For decoding the fn will shift the opposite direction indicated.
    Notes* 
    1. If the shift value isn't present, set to 0, less than -25, or greater than 25 it should return false
    2. Spaces and other nonalphabetical symbols should be maintained
    3. Capital letter are ignored (toLowerCase)
    4. If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), 
    it should wrap around to the front of the alphabet (e.g., z becomes c).
    */

    // Fn will take in an input (message)
    // User will choose to encode (true) or decode (false)
    // Fn will shift the alphabet the indicated amount, either L (-) or R (+) (between -25 and 25)
    // Fn will ?return ?console.log result

    // [a, b, c, d, e, f, g, h, i, j, k,  l,  m,  n,  o,  p,  q,  r,  s,  t,  u,  v,  w,  x,  y,  z]
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    // ascii [97-109, 110-122]
const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
    // If the shift value isn't present, set to 0, less than -25, or greater than 25 it should return false
    if(!shift || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }

    // If user wants to decode
    if(encode === false) {
      shift = shift * -1;
    }

    // Var to hold result
    let result = "";

    // Set input to lower case
    const lowerCaseInput = input.toLowerCase();

    const inputArray = lowerCaseInput.split("");
    const charCodeA = "a".charCodeAt(0);
    const charCodeZ = "z".charCodeAt(0);

if(encode) {
  const encodedArray = inputArray.map((char) => {
    const currentCharCode = char.charCodeAt(0);

    // maintains spaces and other nonalphabetic symbols in the message
    if(currentCharCode < charCodeA || currentCharCode > charCodeZ) {
      return char;
    }

    // Shifts that go past the end of alpha and wrap back to front
    const shiftedCharCode = currentCharCode + shift;
    if(shiftedCharCode > charCodeZ) {
      return String.fromCharCode(charCodeA + ((shiftedCharCode - charCodeZ) - 1));
    } else if (shiftedCharCode < charCodeA) {
      return String.fromCharCode(charCodeZ - ((charCodeA - shiftedCharCode) - 1));
    } else {
      return String.fromCharCode(shiftedCharCode);
    }
  });
  return encodedArray.join("");
}

const decodedArray = inputArray.map(char => {
  const currentCharCode = char.charCodeAt(0);

  // Keeps spaces and other nonalphabetic symbols in message
  if(currentCharCode < charCodeA || currentCharCode > charCodeZ) {
    return char;
  }

// Shifts that go past the front of alpha and wraps to the back
const shiftedCharCode = currentCharCode - shift;
if(shiftedCharCode < charCodeA) {
  return String.fromCharCode(charCodeZ - ((charCodeA - shiftedCharCode) - 1));
      } else if (shiftedCharCode > charCodeZ) {
        return String.fromCharCode(charCodeA + ((shiftedCharCode - charCodeZ) - 1));
      } else {
        return String.fromCharCode(shiftedCharCode);
      }
    });
    return decodedArray.join("");

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

// Ideas:

// for(let i=0, i < input.length, i++) {
    //   let asciiNum = input[i].toLowercase.charCodeAt();
    //   if(asciiNum >= 97 && asciiNum <= 122 {
    //     result += String.fromCharCode(asciiNum + shift)
    //   })
    // }

    // let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // let newAlpha = "";
    // .toLowercase()