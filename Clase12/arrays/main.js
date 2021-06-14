const edades = [13, 24, 37, 43, 59];
const edades2 = edades.slice();

edades2.push(87);

console.log(edades);
console.log(edades2);

// console.log(`Tu edad es ${edades[0]}`);
console.log("Tu edad es " + edades[0]);
// console.log(`Tu edad es ${edades[1]}`);
// console.log(`Tu edad es ${edades[2]}`);
// console.log(`Tu edad es ${edades[3]}`);
// console.log(`Tu edad es ${edades[4]}`);

// for (let i = 0; i < 6; i++) {
//   console.log(`Tu edad es ${edades[i]}`);
// }


for (let i = 0; i < edades.length; i++) {
  console.log(`Tu edad es ${edades[i]}`);
}