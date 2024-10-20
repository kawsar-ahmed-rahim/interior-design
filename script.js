//code for amount of basic packages
const 
plus=document.querySelector(".plus")
minus=document.querySelector(".minus")
dollar=document.querySelector(".dollar")
room=document.querySelector(".room")
hello=document.querySelector(".hello")

let a=199

plus.addEventListener("click",()=>{if(a<800)
    {a=a+100;
    a=(a>800)?"0"+a:a;
    dollar.innerText=a;
    console.log(a);}
});

minus.addEventListener("click",()=>{if(a>199)
   {a=a-100;
    a=(a<800)?"0"+a:a;
    dollar.innerText=a;
    console.log(a);}
});

//code for room number of basic packages
let c=1;
plus.addEventListener("click",()=>{
    c++;
    c=(c<7)?"0"+c:c;
    room.innerText=c;
    console.log(c);})

minus.addEventListener("click",()=>{
        c--;
        c=(c<7)?"0"+c:c;
        room.innerText=c;
        console.log(c);})
    

 //code for amount of pro packages  
const proplus=document.querySelector(".proplus")
prominus=document.querySelector(".prominus")
prodollar=document.querySelector(".prodollar")
proroom=document.querySelector(".proroom")

let b=299;
    
 proplus.addEventListener("click",()=>{if(a<1200)
    {b=b+200;
    b=(b>1200)?"0"+b:b;
    prodollar.innerText=b;
    console.log(b);}
});

prominus.addEventListener("click",()=>{if(b>299)
   {b=b-200;
    b=(b<1200)?"0"+b:b;
    prodollar.innerText=b;
    console.log(b);}
});
 
//code for room number of pro packages
let d=1;
proplus.addEventListener("click",()=>{
    d++;
    d=(d<7)?"0"+d:d;
    proroom.innerText=d;
    console.log(d);})

    prominus.addEventListener("click",()=>{
        d--;
        d=(d<7)?"0"+d:d;
        proroom.innerText=d;
        console.log(d);})
        

//code for giving thank you message
function myMessage1() {var myVar=document.querySelector("#sul");
myVar.innerHTML="Thank you for choosing room." }

function myMessage2() {var myVar=document.querySelector("#sur");
myVar.innerHTML="Thank you for choosing room." }
