// For handle the Asynchronous use promise 

let a =10;
let b =0;

let withinData= new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve(30)
},2000)
})

withinData.then((data))=>{
    b=data;
    console.log(a+b)
}