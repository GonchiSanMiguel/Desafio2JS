const divs = document.getElementsByTagName("div");

for(const div of divs) {
    div.innerHTML = "<h5>Pizza</h5><p>$xxxx</p>";
    div.className = "contenedor";
    const button = document.createElement("button");
    button.innerText = "Agregar al carrito";
    div.append(button);
    button.id = "button";
}


const gustos = document.getElementsByTagName("h5");

gustos[0].innerText = "Muzzarella con tomate";
gustos[1].innerText = "Provolone";
gustos[2].innerText = "Napolitana";
gustos[3].innerText = "Cuatro Quesos";

const ps = document.getElementsByTagName("p");

ps[0].innerText = "$1100";
ps[1].innerText = "$1500";
ps[2].innerText = "$1200";
ps[3].innerText = "$1300";

const boton = document.getElementById("button");

boton.addEventListener("click", () => {
    alert("Se agregó a tu carrito!"); 
    console.log("Se agregó el producto al carrito");
})




