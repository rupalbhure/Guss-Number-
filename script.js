// console.log("kfhudsgff");

let userNumEl = document.getElementById("userNum");
let errorMsgEL = document.getElementById("errorMsg");

let randomNum;

let count = 0;

function generateRandNumber(){

  randomNum = Math.ceil( Math.random()*100 );

}
generateRandNumber();

console.log(randomNum);

function checkTheNumber(){

    count = count + 1;

    let userVal = parseInt(userNumEl.value);

    if( userVal > randomNum ){
        errorMsgEL.textContent = "Number is too HIGH !!! Try Again";
        errorMsgEL.style.color = "red";
        errorMsgEL.style.fontSize = "x-large";

    }
    else if( userVal < randomNum ){

        errorMsgEL.textContent = "Number is too SMALL !!! Try Again";
        errorMsgEL.style.color = "red";
        errorMsgEL.style.fontSize = "x-large";


    }
    else{
        errorMsgEL.textContent = `HURRAY !!! You Won!!! You guessed it in ${count} attempts`;
        
        errorMsgEL.style.color = "green";
        errorMsgEL.style.fontSize = "xx-large";

    }





}


function onResetNumber(){

    generateRandNumber();

   
}

