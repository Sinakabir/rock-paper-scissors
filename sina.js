const choices = [ 'rock' , 'paper' , 'scissors'];

let player = document.getElementById('player');
let computer = document.getElementById('computer');
let resultd = document.getElementById('result');
let splayer = document.getElementById('splayer');
let scomputer = document.getElementById('scomputer');

let playerscore = 0;
let computerscore= 0;




function PlayGame(pchoice){
  let result = '';
 let cchoic = choices[Math.floor(Math.random() * 3)];
 if(pchoice === cchoic){
  result = 'It Is a Tie!'

 }else{
  switch(pchoice){
    case 'rock' :
      result =( cchoic === 'scissors') ? "YOU WIN": "YOU LOSE";
      break;
      case 'paper':
        result= (cchoic === 'rock') ? "YOU WIN": "YOU LOSE";
        break;
        case 'scissors':
          result = (cchoic === 'paper')? "YOU WIN": "YOU LOSE";
          break;
  }console.log(cchoic)
 }
 player.innerHTML = `PLAYER :(${pchoice})`;
 computer.innerHTML = `COMPUTER : (${cchoic})`
 resultd.innerHTML = ` RESULT : (${result})`

 resultd.classList.remove('green' , 'red')

 switch(result){
  case "YOU WIN":
    playerscore ++;
    resultd.classList.add('green');
    splayer.innerHTML = ` player score : (${playerscore})`;
    break;
    case "YOU LOSE":
      computerscore ++;
      scomputer.innerHTML = `computer score : (${computerscore})`;
    resultd.classList.add('red');
    break;
 }
}
