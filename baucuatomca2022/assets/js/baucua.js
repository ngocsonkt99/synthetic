var list = ['bau.png', 'ca.png', 'cua.png', 'ga.png', 'huou.png', 'tom.png'];
const url = "url('assets/img/animals/";
let numberList = new Array(3);
const allItem = document.querySelectorAll(".children-item");

const btn = document.querySelector(".btn");
btn.addEventListener("click", rollHandler);

let randomShake = 0;
async function rollHandler() {
    randomShake = Math.floor(Math.random() * 14) + 4;
    for (let i = 0; i < randomShake; i++) {
        document.querySelector(".btn").classList.add("disable");
        document.querySelector(".btn").disabled = true;
        roll();
        await timer(140);
    }
    // console.log("Done");
    document.querySelector(".btn").classList.remove("disable");
    document.querySelector(".btn").disabled = false;
}

const timer = ms => new Promise((res => {
    setTimeout(res, ms);
}))

function roll() {
    for (let i = 0; i < allItem.length; i++) {
      numberList[i] = Math.floor(Math.random() * 6);
    }
    setBackgroundImage();
}

function setBackgroundImage() {
    for (let i = 0; i < allItem.length; i++) {
        allItem[i].style.backgroundImage = url+list[numberList[i]]+"')";
    }
}