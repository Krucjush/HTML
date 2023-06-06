txt = document.querySelector('.txt')
click = true

function clickTxt() {
    if (click) {
        document.body.style.backgroundColor = "#444"
    }
    else {
        document.body.style.backgroundColor = "#fff"
    }
    console.log(`Ciemnosc ${click}`)
    click =! click
}

btn = document.getElementById('btn')
c2 = document.querySelector('#c2')
btn.onclick = function () {
    c2.style.display = 'none'
}