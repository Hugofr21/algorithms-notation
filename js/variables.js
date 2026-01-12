let a = 5;
let b = 10;

// trocar valores usando operador XOR
a = a ^ b;
console.log("a:", a);
b = a ^ b;
console.log("b:", b);
a = a ^ b;
console.log("a:", a);
console.log("b:", b);

// trocar valores usando destruturação
[a, b] = [b, a];
console.log("a:", a);
console.log("b:", b);
