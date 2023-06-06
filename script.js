age = document.getElementById('age')

age.onfocus = function () {
    age.style.backgroundColor = '#afa'
}

age.onblur = function () {
    age.style.backgroundColor = '#fff'
    if (isNaN(age.value) || age.value < 0 || age.value > 120) {
        alert('Podaj poprawną wartość!')
    }
    console.log(age.value)
}

function over(a) {
    let y = document.getElementsByClassName('i')

    for(x=0; x<y.length; x++) {
        y[x].style.visibility = 'hidden'
    }

    iid = a.nextElementSibling.getAttribute('id')
    console.log(iid)
    i = document.getElementById(iid)
    i.style.visibility = 'visible'
}
function out(b) {
    b.style.visibility = 'hidden'
}