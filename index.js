
function getUSer(id)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({id:id, username:'muralee'});
        },5000);
    });
}

console.log("before");
//getUSer(1, (user)=> {console.log(user)});
getUSer(1).then(result => console.log(result));
console.log('after');

async function display()
{
    const user = await getUSer(1);
    console.log(user);
}
display();
console.log("very end")

