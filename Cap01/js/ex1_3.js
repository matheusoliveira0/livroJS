const a = "20"; //20 foi declaradoo como string
const b = a * 2;
const c = a / 2;
const d = a - 2;
const e = a + 2; //como o valor de "a" é uma string então o + concatena em vez de somar = 20 + 2 = 202

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

alert(e);

const f = Number(a) + 2; //convertendo o valor de "a" para numero

alert(f);
