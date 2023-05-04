// console.log('Selamat datang!');
 
// setTimeout(() => {
//   console.log('2 detik');
// }, 2000)

// setTimeout(() => {
//   console.log('Terima kasih sudah mampir, silakan datang kembali!');
// }, 1000)

// setTimeout(() => {
//   console.log('Terima kasih sudah mampir, silakan datang kembali2!');
// }, 1001)
 
// console.log('Ada yang bisa dibantu?');

// !========================================================================

// function getUsers(callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ['John', 'Jack', 'Abigail'];
//     callback(users);                                                
//   }, 3000);
// }

// getUsers((users) => {
//   console.log(users);
// });

// !========================================================================

// function getUsers(isOffline, callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ['John', 'Jack', 'Abigail'];
    
//     if (isOffline) {
//       callback(new Error('cannot retrieve users due offline'), null);
//       return;
//     }
 
//     callback(null, users);
//   }, 3000);
// }

// !========================================================================

// function usersCallback(error, users) {
//   if (error) {
//     console.log('process failed:', error.message);
//     return;
//   }
//   console.log('process success:', users);
// }

// getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
// getUsers(true, usersCallback); // process failed: cannot retrieve users due offline

