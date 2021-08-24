const events = require('events');
const event=new events();


//multiple events at one time 
event.on('say my name',()=>{
    console.log("milan")
});

event.on('say my name',()=>{
    console.log("katira")
});

event.on('say my name',()=>{
    console.log("hello")
});

event.emit("say my name");

