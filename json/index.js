const info = {
    name:"milan",
    age:21,
    lang:"js",
};

//obj to json 
const jsondata=JSON.stringify(info)
console.log(jsondata)

//json to obj
const obj=JSON.parse(jsondata);
console.log(obj);

