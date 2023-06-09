// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// map, forEach
const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // Fn takes in a message
  const polyGrid = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "(i/j)", "k"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z", " "]
  ];

  if(encode) {
    let inputArray = input.split("");
    // The fixedInputArray
    //   1. replaces and "i" and "j" with "i/j"
    //   2. Converts everything to lower case
    let fixedInputArray = inputArray.map((string) => {
      let lowerCase = string.toLowerCase();
      if (lowerCase === "i" || lowerCase === "j") {
        return "(i/j)";
      }
      return lowerCase;
    });

// Find x and y coodinates
let xArray = [];
let yArray = fixedInputArray.map((letter) => {
  for(let i = 0; i < polyGrid.length; i++) {
    const row = polyGrid[i];
    if(row.find((alpha) => alpha === letter)) {
      // Adds a X-coodinate if "row" meets given condition. The "+1" corrects for X/Y axis given in prompt
      xArray.push(i + 1);
      // Adds Y-coordinate.  Again, the "+1" corrects for X/Y axis given in prompt
      return row.indexOf(letter) + 1;
    }
  }
});

// Adds X-coordinate and Y-coordinate arrays together so X/Y pairs are in sequence
result = xArray.reduce((acc, xValue, index) => {
  let pair = `${yArray[index]}${xValue}`;
  // converts numeric representation of a space back to " "
  if(pair === "65") {
    pair = " ";
  }
  acc.push(pair);
  return acc;
}, []);
}

// Decode
if (!encode) {
  let spacesAdded = input.replace(" ", 65);
  // checks that there are an even number of characters so that all coordinate pairs are kept together
  if (spacesAdded.length % 2 !== 0) return false;
  let coordinates = spacesAdded.match(/..?/g);
  result = coordinates.map((yx) => {
    let rowIndex = yx.split("")[1] - 1;
    let columnIndex = yx.split("")[0] - 1;
    return polyGrid[rowIndex][columnIndex];
  });
}

// Output
return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

// Create a square grid
// const grid = [];
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     grid.push(String.fromCharCode(65 + i * 5 + j));
//   }
// }
