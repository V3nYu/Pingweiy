console.log("Hello")

log("hello world")
log("welocome to SIT323/737")

var async = function(){
    setTimeout(function(){log("I am coming out later although I have been called before the next one")}, 2000)
}

var aader= function(first,second){
    var sum=first+second
    return sum
}
var log=function(msg){
    console.log("[Log]: ",msg)
}
log("The sum is " +addEventListener(5,6))
async();
log("This is going to come out before the previous one")



