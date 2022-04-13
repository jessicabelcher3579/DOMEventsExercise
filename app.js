// 1a
const button1 = document.getElementById(`one`);

// 1b
button1.onclick = () => {
    alert(`You clicked the first button! Congrats!`);
};

// 2a
const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener(`mouseover`, () => {
    alert(`You hovered over the h3 element! Congrats!`);
});

// 3a
const form = document.querySelector(`form`);

// 3b
form.addEventListener(`submit`, () => {
    const text = form.elements.entry.value;
    alert(`${text}`);
});

// 4a
const darkMode = document.querySelector(`#dm`);

// 4B
const body = document.querySelectorAll(`*`);
darkMode.addEventListener(`click`, () => {
    for (element of body){
        element.classList.toggle(`dark-mode`);
    };
});

// 5a
const times = document.getElementById(`times`);

// 5b
let num = 1;
times.addEventListener(`click`, () => {
    if (num < 3){
        alert(`You clicked the last button! Congrats!`);
        num++;
    } else if (num === 3){
        alert(`OH NO! This button is NOT going to work anymore`);
        num++;
    } else {
        times.disabled = true;
    };
});