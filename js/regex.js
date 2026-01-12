function splitWords(str) {
  let part = str
    .split(" ")
    .map((word) => word.replace(/[^a-zA-Z0-9][.,\/ -]/g, ""));
  return part;
}

console.log(splitWords("Hello, how are you? I'm fine."));

function extractDigits(str) {
  //let part = str.split("").filter((char) => /\d/.test(char));
  //let part = str.match(/\d+/g);
  let part = str.replace(/\D/g, "");
  return part;
}

console.log("Extracting digits:");
console.log(extractDigits("I have 2 apples and 3 bananas."));
