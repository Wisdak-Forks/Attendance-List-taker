
let saveEL = document.getElementById("pe")
console.log(saveEL)
let countEl = document.getElementById("counter-el")
let count = 0

function inc() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

 function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}
let st = "Welcome"
alert(st)
