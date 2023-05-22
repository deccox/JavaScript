let colors = ["A","B","C","D","E","F",1,2,3,4,5,6,7,8,9];

let color = document.getElementById("cli");
let button = document.getElementById("btn");

color.addEventListener('click', function(){
    let text = "#";
    for (let i = 0; i < 6; i++){
        text += colors[getRandomNumber()];
    }
    document.body.style.backgroundColor = text;
    button.textContent = text;
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}