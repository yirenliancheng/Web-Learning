
var func=new Promise((resolve,rejected)=>{
    resolve("success");
    rejected("rejected");
})

func.then(value=>console.log(value));

function func1(success){
    success();
    setTimeout(function(){
        console.log("Hello world");
    },3000);
}

function success1(){
    console.log("success");
}

var v=success1;
func1(v);