const randomNumber=Math.round(Math.random()*100)
console.log(randomNumber);
const check=document.querySelector(".check-btn")
const input=document.querySelector(".guess-input")
const again=document.querySelector(".again-btn")
const secret=document.querySelector(".secret-number")
const score1=document.querySelector(".score")
const topScore1=document.querySelector(".top-score")
let score=10;
let topScore=0;


check.addEventListener("click",()=>{
     const guessInput = Number(input.value);
     const msg = document.querySelector(".msg");
     const body = document.querySelector("body");

     if(!input.value){
        msg.innerText="Please enter a number"
     }else if(randomNumber===guessInput){
       body.style.backgroundColor="yellow"
         msg.innerHTML = ` Congrats You win <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
       secret.textContent=randomNumber
       if(score>topScore){
        topScore=score;
        topScore1.textContent=topScore
       }else{
        if(score>0){
          score--;
          guessInput>randomNumber?(msg.innerHTML="DECRASE"):(msg.innerHTML="İNCRASE")
        }
       }
     }
    
     

})