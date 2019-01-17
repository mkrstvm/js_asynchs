function getUSer(id, callback)
{
    setTimeout(()=>{
        callback({id:id, username:'muralee'});
    },5000)
}

console.log("before");
getUSer(1, (user)=> {console.log(user)});
console.log('after');