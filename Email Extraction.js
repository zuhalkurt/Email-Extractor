const fs = require("fs");
const file = fs.readFileSync("test.txt", {encoding:"utf8"});

const regexFindEmail = /@[a-zA-Z0-9.-]+/g;


let regexFindEmailFile = file.match(regexFindEmail);
console.log(regexFindEmailFile.sort());

const count = {};
  regexFindEmailFile.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
console.log(count);


function emailExtractor (regexp){
   let regFile = file.match(regexp);
   return regFile.length;
}

const sortedEmails = 
    Object.entries(count).sort(([,a],[,b]) => b-a);

console.log(sortedEmails.slice(0,10));









 