var data=[{question:'What is your name',
answer:'harold',
options:{a:'harold',b:'oboy',c:'mama',d:'hmmmm'}
},

{question:'What is your native name',
answer:'oboy',
options:{a:'ugonna',b:'oboy',c:'mahabeb',d:'hmmmm'}
},
{question:'How old are you',
answer:'3',
options:{a:'1',b:'2',c:'3',d:'4'}
},
{question:'Favourite dish',
answer:'bole',
options:{a:'cassava',b:'agbado',c:'rice',d:'bole'}
},


];
var count=data.length-1;
console.log(count);
var counter=Math.floor(Math.random()*count);

function link(){
var display=document.getElementById('display');
display.innerHTML=data[counter].question;

var optiona=document.getElementById('optiona');
var optionb=document.getElementById('optionb');
var optionc=document.getElementById('optionc');
var optiond=document.getElementById('optiond');

optiona.innerHTML=data[counter].options.a;
optionb.innerHTML=data[counter].options.b;
optionc.innerHTML=data[counter].options.c;
optiond.innerHTML=data[counter].options.d;
}

function reset(){
    optiona.style="background:transparent";
    optionb.style="background:transparent";
    optionc.style="background:transparent";
    optiond.style="background:transparent";
    
    
    }
    //the next question initializer//
function next(){
    counter=Math.floor(Math.random()*count);
    console.log(counter)
    link();

   // counter.Math.random();
    //console.log(counter)
}
//the answer checker//
function check(e){
if(e.innerHTML==data[counter].answer){
e.style="background:green";

}

else if(e.innerHTML!=data[counter].answer){
    e.style="background:red";
function wrongAlert(){alert('the right answer is '  + data[counter].answer)}
    setTimeout(wrongAlert,1000);
    }
    setTimeout(reset,1000);
    setTimeout(next,1200);


}

function wrongAlert(){alert('the right answer is '  + data[counter].answer)}









