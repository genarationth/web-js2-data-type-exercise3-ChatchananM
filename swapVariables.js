// Assign 1st-values to variables
let cupFirst = "Americano";
let cupSecond = "Espresso";

console.log("แก้วแรก before =", cupFirst);
console.log("แก้วที่สอง before =", cupSecond);

// Swap variables
let buffer1st, buffer2nd;
buffer1st = cupFirst;
buffer2nd = cupSecond;
//console.log(buffer1st, buffer2nd);
cupFirst = buffer2nd;
cupSecond = buffer1st;
console.log("แก้วแรก after =", cupFirst);
console.log("แก้วที่สอง after =", cupSecond);
