const add =(a,b) =>{
    return a+b;
};

const sub=(a,b) =>{
    return a-b;
};

//only last call consider here 
module.exports =add;
//module.exports=sub;


module.exports.add=add;
module.exports.sub=sub;

//multiple property passing 
module.exports={add,sub};