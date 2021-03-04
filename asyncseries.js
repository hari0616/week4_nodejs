var async=require('async');
async.series([
  function (callback) {
    setTimeout (()=>{
      // console.log("task one");
      callback(null)
    },1000);
    
  },
  function (callback) {
    setTimeout (()=>{
      console.log("task two");
      callback(null,'haridha')
    },2000);
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

