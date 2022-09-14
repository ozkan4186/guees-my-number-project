const randomNumber=Math.round(Math.random()*100)
console.log(randomNumber);
const check=document.querySelector(".check-btn")
const input=document.querySelector(".guess-input")
const again=document.querySelector(".again-btn")
const secret=document.querySelector(".secret-number")



check.addEventListener("click",()=>{
     const guessInput = Number(input.value);
     const msg = document.querySelector(".msg");
     const body = document.querySelector("body");

     if(!input.value){
        msg.innerText="Please enter a number"
     }else if(randomNumber===guessInput){
       body.className ="bg-success"
       msg.innerHTML="you win 💝"
     }else if(randomNumber<guessInput){
      msg.innerHTML="decrase"

     }else{
      msg.innerHTML="incrase"
     }

})