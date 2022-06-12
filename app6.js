const div = document.querySelector(".grid");
for(let i=1;i<37;i++){
  var elem = document.createElement('div');
  elem.classList.add(slst(i));
  elem.setAttribute('grid-id',i);
  elem.addEventListener('click', adder);
  div.appendChild(elem);
}

let startTime = new Date().getTime();

var x = setInterval(() => {
  let now = new Date().getTime();
  var timeLapsed = now - startTime;
  var mins = Math.floor(timeLapsed / 60000);
  var secs = ((timeLapsed% 60000) / 1000).toFixed(0);
  document.getElementById("timer").innerHTML = `TIME ${mins}:${secs}` ;
  document.getElementById("scoreCard").innerHTML = `SCORE = ${window.score}` 
  
}, 1000);

function slst(e){
    let num = e;
    let strnum = `${num}`;
    return strnum;
}

var audio = new Audio("click.mp3");
var endGame = new Audio("smb_gameover.wav")

let lst = [];
for(var i = 1;i<37;i++){
  lst.push(i);
}
lst.sort(() => 0.5 - Math.random() )

let clickAdder = [] ;
let equaler = [] ;

function adder(){
  var elemGet = this.getAttribute('grid-id')
  window.clickAdder.push(elemGet) 
  audio.play();
}

function areEqual(arr1, arr2)
{
  let n = arr1.length;
  let m = arr2.length;
 
  if (n != m)
    return false;

  for (let i = 0; i < n; i++)
    if (arr1[i] != arr2[i])
      return false;
 
  return true;
}

var nos;
var e;

function loopChecking(){
    if (window.nos > window.e){
      var adder = lst[window.e];
      var spanner = document.getElementsByClassName(slst(adder));
      var gridElem = spanner[0];
      gridElem.classList.add('showup')
      moveShower(window.e+1, window.nos)
    }
    else{
      setTimeout(animeRemover, 1000)
      setTimeout(compare, 1000 + (window.e + 1)*900) 
    }
   
}

function moveShower(ctr, num){
  window.clickAdder = [];
  window.equaler = [];
  e = ctr;
  window.nos = num;
  loopChecking()

}

function animeRemover(){
  for(var j=0;j<(window.nos);j++){
    var remover = lst[j];
    var spanner2 = document.getElementsByClassName(slst(remover));
    var gridElem2 = spanner2[0];
    var elem_id = gridElem2.getAttribute('grid-id')
    window.equaler.push(elem_id)
    gridElem2.classList.remove('showup');
  }
}

var score = 0 
function compare(){
  score = ((window.equaler.length) -1)*10 ;
  if(areEqual(window.clickAdder, window.equaler)){
    if(window.clickAdder.length == 16){
      alert("A champion has born")
    }
    else{
      moveShower(0, (window.nos)+1) 
    }                                      
  }
  else{
    endGame.play()
    setTimeout(()=>{
      alert("Oops, You lost the game. Better Luck next time")
      let personName = prompt("Enter your name", "Anonymus");
      localStorage.setItem('name6', personName)
      localStorage.setItem('playerScore6', score)
      localStorage.setItem(personName, score)
    }, 1000)

  }
}

moveShower(0,1);