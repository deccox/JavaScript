let colors = ["#00FFFF","#FFFF00","#FF00FF"];
let color = document.getElementById("cli");
let button = document.getElementById('btn');

color.addEventListener('click', function(){
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    button.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}