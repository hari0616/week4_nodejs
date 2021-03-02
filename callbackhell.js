first(2,function(firstresult,err){
    console.log(firstresult);
    if(!err){
        second(firstresult,function(secondresult,err){
            console.log(secondresult);
           if(!err){
               third(secondresult,function(thirdresult,err){
                console.log(thirdresult);
                   if(!err){
                       console.log(thirdresult);
                   }
               })
           }

        })
    }
})

function  first(value,callback){
    callback(value+2);
}
function  second(value,callback){
    callback(value+2);
}
function  third(value,callback){
    callback(value+2);
}






