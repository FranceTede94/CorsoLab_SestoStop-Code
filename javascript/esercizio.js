document.getElementById("gioca").onclick = function(){

let num1;
let num2;
num1 = parseInt(Math.random(num1) *10) + 1;
num2 = parseInt(Math.random(num2) *10) + 1;
console.log(num1);
console.log(num2);

document.querySelector("#you span").innerHTML = num1;
document.querySelector("#cpu span ").innerHTML = num2;


if(num1 > num2){
   document.getElementById("messaggio").innerHTML = "Complimenti, hai vinto"; 
}

else
{
    if(num1 == num2)
    {
    document.getElementById("messaggio").innerHTML = "Partita patta";
    }
    else{
    document.getElementById("messaggio").innerHTML = "Mi dispiace, hai perso";
    }
}

}


