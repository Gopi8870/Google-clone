
const received=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const ans=undefined;

        if(ans){
            resolve(ans);
        }
        else{
            reject('no data');
        }
    },3000)
})

received

.then((data)=>{
    console.log(data);
})
.catch((mes)=>{
    console.log(mes);
})
