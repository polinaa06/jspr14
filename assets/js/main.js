"use strict";

let tabBtns = document.querySelectorAll('.tab__btn')
let tabTexts = document.querySelectorAll('.tab__text')

tabBtns.forEach((item, index) => {
    item.addEventListener('click', function () {
        document.querySelector('.tab__btn.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tab__text.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})

function sayHi() {
    alert('hi')
}
let timerId;
start.onclick = function () {
    timerId = setTimeout(sayHi, 3000)
}
cancel.onclick = function () {
    clearTimeout(timerId)
    alert(`Отмена таймера с id: ${timerId}`)
}