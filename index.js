var checkbtn=document.querySelector("#check");
var birthday= document.querySelector("#birthday");
var luckyNumber=document.querySelector("#lucky-num");

function checkHandler(){
    
    var datetonumber=Number(birthday.value.split('-').join(""));
    console.log(datetonumber);
    var sum=0;
    while(datetonumber!=0){
        sum=sum+datetonumber%10;
        datetonumber=Math.floor(datetonumber/10);
        }

        if(sum%Number(luckyNumber.value)===0){

            document.getElementById("div-result").innerHTML="Lucky !!";
        }
        else{
            document.getElementById("div-result").innerHTML="Not Lucky !!";
        }
}

checkbtn.addEventListener('click',checkHandler);
