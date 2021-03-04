var async=require('async');
async.parallel([
  function (callback){
    setTimeout (()=>{
      //console.log("task one");
      //callback(null)
    },2000);
  
  },
  function (callback){
    setTimeout (()=>{
      callback(null,2)
      //console.log("task second");
     
    },200);
  
  }

],

function (err,result) {
  if(err){
      console.log(err)
  }
  else{
    console.log(result);
  }
  
   
  
});