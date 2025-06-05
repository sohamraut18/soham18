//const prompt = require('prompt-sync')();
//const name = prompt("What is your name? ");
//console.log("Hello, " + name + "!");


//const xyz = function (x=5)
//{
 //   let ans =0;
//    ans=x*x;
  //  return ans;
//}
//console.log("the answer is: " + xyz(9));



function greet (name,cb){
    console.log ("hii, "+ name + "!");
    cb();
}

function gdb(){
    console.log("goodbye");
}
greet("soham",gdb);