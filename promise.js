const p = new Promise((resolve,reject)=>{
    
    setTimeout(() =>{
        resolve(1),5000
    });
});

p.then((resolve,error) => console.log(result));