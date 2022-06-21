//promises.all()- takes an array of promises and returns a promise that resolves when all the promises in the array have resolved.
//------------------------------------------------------------------------------------------------------------------------------
const promise1=Promise.resolve(3);
const promise2=34;
const promises2=[promise1,promise2,promise3]
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,"foo");
});



// //------------------------------------------------------------------------------------------------------------------------------
// //promise.allsetteled() - Returns a promise that is fulfilled when all of the input promises are settled.


const promise4=Promise.resolve(1);
const promise6=new Promise((resolve,reject)=>{
    setTimeout(reject,100,"foo");
}
);
const promises1=[promise4,promise6];

Promise.allSettled(promises1).then( (result)=>{
    console.log(result)
    result.forEach(element => {
        console.log(element.status);
        
    });
}).catch(err=>{
    console.log(err);
}
)


//------------------------------------------------------------------------------------------------------------------------------

//promise.any() - Returns a promise that is fulfilled when any of the input promises are fulfilled.

const promise7=Promise.reject(0)
const promise8=new Promise((resolve)=>setTimeout(resolve,100,"quick"));
const promise9=new Promise((resolve)=>setTimeout(resolve,500,"slow"));

const promise=[promise7,promise8,promise9];
Promise.any(promise).then( (value)=> console.log(value));


//------------------------------------------------------------------------------------------------------------------------------
//promise.catch() - Returns a promise that is rejected with the input error.

const promise10=new Promise((resolve,reject)=>{
    throw 'Un-oh';
});

promise10.catch((error)=>console.error(error));

//------------------------------------------------------------------------------------------------------------------------------
//promise.finally() - Returns a promise that is fulfilled with the input value or rejected with the input error.

function checkmail(email){
    return new Promise((resolve,reject)=>{
        if(email.includes('@')){
            resolve(email);
        }
        else{
            reject('Invalid email');
        }
    }


    )
}

checkmail("abc.gmail.com").then((email)=>console.log(email))
.catch((error)=>console.log(error))
.finally(()=>console.log("finally"));

//------------------------------------------------------------------------------------------------------------------------------
//promise.race()

const promise11=new Promise( (resolve,reject)=>{
    setTimeout(resolve,500,'one');

})

const promise12=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'two')
})

Promise.race([promise11,promise12]).then((value)=>console.log(value))

//--------------------------------------------------------------------------------------------------------------------------
//promise.then() - Returns a promise that is fulfilled with the input value or rejected with the input error.


const promise13=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'Resolved');
}
)

promise13.then((value)=>console.log(value))
.catch((error)=>console.log(error))
.finally(()=>console.log("finally"));

//--------------------------------------------------------------------------------------------------------------------------
//Chaining Promises example

new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'one');
}
).then((value)=>{
    console.log(value);
    return value;
}
).then((value)=>{
    console.log(value);
    return value;
}
).then((value)=>{
    console.log(value);
    return value;
}
).catch((error)=>{
    console.log(error);
}
).finally(()=>console.log("finally"));


















