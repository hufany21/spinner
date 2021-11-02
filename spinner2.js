const sentence = "\r|\r/\r-\r\\\r|\r/\r-\r\\\r|";
let ms = 0
const typewriter = function (sentence){
  sentence.split()
for (let letter of sentence) {
  ms++
  setTimeout(() => {
    process.stdout.write(   `\r${letter}     `)
  }, 100 * ms++ /2 )
  

}



};

typewriter(sentence)






// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r/   '); 
// }, 1000);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r-   '); 
// }, 1100);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1200);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 1300);
// // ... fill in the rest yourself ..