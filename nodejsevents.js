const EventEmitter=require('events');
class MyEmitter extends EventEmitter {}
const myEmitter=new MyEmitter();
myEmitter.on('WaterFull',()=>{
    console.log("Please turn off the motor");
    setTimeout(function(){
        console.log("Please turn it off");
    },3000)
})
myEmitter.emit('WaterFull');
// Please turn off the motor
// Please turn it off
// removed type:module from package.json as this was not working