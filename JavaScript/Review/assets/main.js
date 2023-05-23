let pessoas = [
    {
        id: 1,
        author: "jhon Kennedy",
        job: "Ux Desing",
        info: "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 2,
        author: "Sara Buarte",
        job: "Ux Desing",
        info: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
    },
    {
        id: 3,
        author: "Joseph Tavars",
        job: "Ux Desing",
        info: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are goi"
    },
    {
        id: 4,
        author: "Bilbao Tandera",
        job: "Ux Desing",
        info: "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampde"
    }

]

let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");


let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");
let surprise = document.getElementById("surprise");

let currentItem = 0

window.addEventListener("DOMContentLoaded",function(){
    let item = pessoas[currentItem];
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
});

backbtn.addEventListener('click',function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = 3;
    }
    let item = pessoas[currentItem];
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;

});

nextbtn.addEventListener('click',function(){
    currentItem++
    if (currentItem > 3){
        currentItem = 0;
    }
    console.log(currentItem);
    let item = pessoas[currentItem];
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;

});

surprise.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * pessoas.length);
    let item = pessoas[currentItem];
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
});