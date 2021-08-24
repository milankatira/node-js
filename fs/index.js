const fs=require("fs");
fs.writeFileSync("read.txt",'welcome');

//for overwrite
//fs.writeFileSync("read.txt",'welcome 1');

//append
//fs.appendFileSync("read.txt",'welcome 1');

//read
const data=fs.readFileSync("read.txt");
console.log(data)
//<Buffer 77 65 6c 63 6f 6d 65>
mydata=data.toString();
console.log(mydata)
//welcome

fs.renameSync('read.txt','write.txt')