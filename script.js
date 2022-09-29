'use strict';
let SecretNumber=Math.trunc(Math.random()*20)+1;

let score=20;
document.querySelector('.check').addEventListener('click', function() {
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent='🧨 no number!';
    } else if(guess=== SecretNumber){
        document.querySelector('.number').textContent=SecretNumber;
        document.querySelector('.message').textContent='correct number!';
       
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
    }else if(guess > SecretNumber){
        if(score>0){
        document.querySelector('.message').textContent='too high';
        score--;
       document.querySelector('.score').textContent=score;} else{
        document.querySelector('.message').textContent='you lost';
        document.querySelector('.number').textContent=SecretNumber;
        document.querySelector('.score').textContent=0;
        document.querySelector('body').style.backgroundColor='rgb(216, 23, 23)';
        document.querySelector('.number').style.width='30rem';
       } 
    }else if(guess < SecretNumber){
        if(score>0){
        document.querySelector('.message').textContent='too low';
        score--;
        document.querySelector('.score').textContent=score; }else{
            document.querySelector('.message').textContent='you lost';
            document.querySelector('.number').textContent=SecretNumber;
            document.querySelector('.score').textContent=0;
            document.querySelector('body').style.backgroundColor='rgb(216, 23, 23)';
            document.querySelector('.number').style.width='30rem';
        }
    } 
}); 
document.querySelector('.again').addEventListener('click',function() {
    score=20;
    SecretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='start guessing... ';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});