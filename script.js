


const duck = document.querySelector("#duck");

duck.addEventListener("click", () => {
    increaseScore();
    moveDuck();
});



const increaseScore = () => {

    const score = document.querySelector("#score-counter").innerHTML;

    const scoreHTML = document.querySelector("#score-counter");

    let count = Number(score);

    scoreHTML.innerHTML = count + 1;
};



const getRandomNum = (num) => {
    return Math.floor(Math.random() * Math.floor(num));
};

const moveDuck = () => {
    const w = window.innerWidth;
    const h = innerHeight;
    duck.style.top = getRandomNum(w) * .5  + "px";
    duck.style.left = getRandomNum(h) + "px";
};



const totalCount = 5;
function ChangeIt() 
{
let num = Math.ceil( Math.random() * totalCount );
document.body.background = 'images/'+num+'.png';
document.body.style.backgroundSize = "cover";// Background repeat
}
