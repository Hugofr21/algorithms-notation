// ...existing code...
function test() {
  let x = 1;
  for (let i = 0; i <= 128; i += 1) {
    x += i;
  }
  return x;
}
console.log("Test function output:");
console.log(test());
