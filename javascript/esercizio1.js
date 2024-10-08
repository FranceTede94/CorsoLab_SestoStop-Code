
let giocatore1 = 0;
let giocatore2 = 0;

document.getElementById("gioca").onclick = function(){
    console.log("test");

let primacarta;
let secondacarta;
primacarta = parseInt(Math.random(primacarta) *10) + 1;
secondacarta = parseInt(Math.random(secondacarta) *10) + 1;
console.log(primacarta);
console.log(secondacarta);

document.querySelector("#you span").innerHTML = primacarta;
document.querySelector("#cpu span ").innerHTML = secondacarta;


if(primacarta > secondacarta){
   document.getElementById("messaggio").innerHTML = "Complimenti, hai vinto";
    giocatore1++;
   console.log("Il Giocatore1 ha vinto e hai ricevuto " + giocatore1 + " punto");
}

else
{
    if(primacarta == secondacarta)
    {
    document.getElementById("messaggio").innerHTML = "Partita patta";
    }
    else{
    document.getElementById("messaggio").innerHTML = "Mi dispiace, hai perso";
    giocatore2++;
    console.log("Il Giocatore2 ha vinto e hai ricevuto " + giocatore2 + " punto");
    }

}

}