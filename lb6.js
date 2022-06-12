var currName = localStorage.getItem('name6')
var currScore = localStorage.getItem('playerScore6')

var table = document.getElementsByTagName('table')
var tableData = table[0]
console.log(tableData)

if(localStorage.getItem('xyz') == null){
    let nameLst = []
    localStorage.setItem('xyz', JSON.stringify(nameLst))
}

let prevDet = JSON.parse(localStorage.getItem('xyz'))
prevDet.push([currName, currScore])
prevDet.sort(function(a,b){return b[1].localeCompare(a[1]);});
for(let i of prevDet){
    var dumlst = []
    for (const property in i) {
        dumlst.push(i[property])        
          
    }
    tableData.innerHTML += `<tr><td>${dumlst[0]}</td><td>${dumlst[1]}</td></tr>`
    localStorage.setItem('xyz', JSON.stringify(prevDet))
}