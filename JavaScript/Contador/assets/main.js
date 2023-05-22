let contador = 0;

let count = document.getElementById('countValue');
let button = document.querySelectorAll(".btn");

button.forEach(function (btn) {
    btn.addEventListener('click',function(e){
        let value = e.currentTarget.classList;
        if (value.contains("increased")){
            contador++;
        } else if (value.contains("reset")){
            contador = 0;
        } else {
            contador--;
        }
        count.textContent = contador;

        if(contador > 0){
            count.style.color = "green";
        } else if (contador < 0){
            count.style.color = "red";

        } else {
            count.style.color = "black";
        }
    })
});
