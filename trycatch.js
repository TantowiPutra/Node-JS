// try {
//   console.log("Awal blok try");   // (1)
//   errorCode;                      // (2)
//   console.log("Akhir blok try");  // (3)
// } catch (error) {
//   console.log("Terjadi error!");  // (4)
// }
 
/* output
Awal blok try
Terjadi error!
*/

// const json = '{"name" : "Yoda", "age" : 20}';
const json = '{ bad json }'

try {
  const user = JSON.parse(json);
 
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// console.log(json.age);