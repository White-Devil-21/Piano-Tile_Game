var currName = localStorage.getItem('name4')
var currScore = localStorage.getItem('playerScore4')

var table = document.getElementsByTagName('table')
var tableData = table[0]
console.log(tableData)

if(localStorage.getItem('abcd') == null){
    let nameLst = []
    localStorage.setItem('abcd', JSON.stringify(nameLst))
}

let prevDet4 = JSON.parse(localStorage.getItem('abcd'))
prevDet4.push([currName, currScore])
prevDet4.sort(function(a,b){return b[1].localeCompare(a[1]);});
console.log(prevDet4) 
for(let i of prevDet4){
    var dumlst = []
    for (const property in i) {
        dumlst.push(i[property])        
              
    }
    tableData.innerHTML += `<tr><td>${dumlst[0]}</td><td>${dumlst[1]}</td></tr>`
    localStorage.setItem('abcd', JSON.stringify(prevDet4))
}










