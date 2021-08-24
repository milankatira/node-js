const fs=require("fs");

//() is must

fs.writeFile("new.txt","hello",(err)=>{
console.log('file created');
});


//syncronus version
const mydata=fs.readFileSync("file.txt","utf-8");
console.log(mydata);

//asychronus
const my_data=fs.readFileSync("file.txt","utf-8",()=>{
    console.log("working");
})
console.log(my_data);
