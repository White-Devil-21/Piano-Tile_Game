let ctr = 1


function nameEntering(){
    //for(let i= ctr; i<= 5  ; i++){
        var ctrl = ctr
        let dummy = localStorage.getItem((ctrl).toString())
        //console.log(dummy)
        localStorage.setItem((ctrl+1).toString(), dummy)
    //}   
    let strctr = `${ctr}`;
    let personName = prompt("Enter your name", "Anonymus");
    localStorage.setItem(strctr, personName)
    //console.log(localStorage.getItem(strctr))
    ctr += 1
}

console.log(localStorage.getItem('1'))
console.log(localStorage.getItem('2'))
console.log(localStorage.getItem('3'))
console.log(localStorage.getItem('4'))



  