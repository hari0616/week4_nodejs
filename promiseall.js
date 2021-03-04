function call1(company){
 return new Promise ((resolve,reject)=>{
     
        setTimeout(()=>{
            resolve(company);
        },210);
     })
}
function call2(job) {
   return new Promise((resolve,reject) =>{
       
        setTimeout(()=>{
            resolve(job)
        },200)
    
      
    });  
    
}
function call3(application){
    return new Promise ((resolve,reject)=>{
       
            setTimeout(()=>{
                resolve(application)
            },500)
       

    })
    
}
function call4(package) {
    return new Promise ((resolve,reject)=>{
        
            setTimeout(()=>{
                resolve(package)
            },3000)
        
            
        reject(new Error("oops4!"));

      
    })
    
}
//using then method
// call1('tts')
// .then(company=> console.log(company))
// call2('software developer')
// .then(job => console.log(job))
// call3('fresher')
// .then(application => console.log(application))
// call4(15000)
// .then(package => console.log(package))
// .catch((err)=> console.log(err.message))
Promise.all( 
    [
        call1('tts').catch(error =>{ return error}),
        call2('software developer') .catch(error =>{ return error})     ,
        call3('fresher').catch(error =>{ return error}),
        call4().catch(error =>{ return error})
    ]
    ).then(console.log)
    

