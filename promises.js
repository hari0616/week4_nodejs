var value="2"
var promise =new Promise (function (resolve,reject){
    //reject("error");
    resolve(value);
})
promise.then(first).then(second).then(third).then(function(response){
    console.log(response);
})

function first(value){
    console.log("first"+value);
    return value+1;
}
function second(value){
    console.log(typeof value);
    if( typeof value === 'string'){
        console.log("wrong"+value);
    }
    console.log("second"+value);
    return value+1;
}
function third(value){
    console.log("third"+value);
    return value+1;
}



