let promise=function (time){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(time)
        },time)
    })

}

function promiseAll(promises){

    let finalRes=[];

    let count=0;

    return new Promise ((resolve,reject)=>{
       
        promises.forEach((promise,index)=>{
       
            promise.then((results)=>{

                finalRes[index]=results;
                count+=1

                console.log(results)
                if(count==promises.length){
                    resolve(finalRes)
                }

               
    
            }).catch((err)=>{
                reject(err)
            })
    
        })

    })

    
}

const res=[promise(5000),promise(1000)];

const promiseRes=promiseAll(res);
promiseRes.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})


