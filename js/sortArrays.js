function sortArrays(arr) {
  let flatArray = arr.flat();
  flatArray.sort((a, b) => a - b);
  console.log("Flat Array:", flatArray);
  let chunkSize = Math.ceil(Math.sqrt(flatArray.length));
  console.log("Chunk Size:", chunkSize);
  let merged = [];
  for (let i = 0; i < flatArray.length; i += chunkSize) {
    merged.push(flatArray.slice(i, i + chunkSize));
  }

  return merged;
}

console.log("Merged Chunks:");
console.log(
  sortArrays([
    [1, 20, 3],
    [42, 50],
    [6, 7, 8, 9, 10],
  ])
);
