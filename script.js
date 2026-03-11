//RA3Ex7 - Activitats ràpides DOM JS

//1 - Selecció: Usa querySelector per canviar el color d'un <h1> quan la pàgina carregui.

let titol = document.querySelector("#titol-principal");
  titol.style.color = "blue"

//2 - Contingut: Fes que un paràgraf <p> mostri "Hola Món" usant textContent.

 let parraf = document.querySelector("#paragraf-hola")
  parraf.textContent = "Hola món"
  
//3 - Atributs: Canvia la 'src' d'una imatge <img> usant setAttribute.

let imagen = document.querySelector("#imatge-canviant")
  imagen.setAttribute ("src", "https://www.pngmart.com/files/22/Mike-Wazowski-Meme-PNG-HD-Isolated.png")

//4 - Estils: Canvia el color de fons (backgroundColor) d'un element en fer-li clic.


//5 - Classes: Crea un botó que afegeixi/tregui la classe 'actiu' amb classList.toggle.

let boton = document.querySelector ("#boto-alerta");
let caixa = document.querySelector ("#caixa-estil");
boton.onclick = function() {
    alert("Holaa, has pulsado el boton");
caixa.classList.toggle("dark-mode");
}

//6 - Esdeveniments: Afegeix un addEventListener a un botó perquè tregui una alerta (alert).

let botonAlerta = document.querySelector ("#boto-toggle")
    botonAlerta.addEventListener("click", function() {
        alert("pulsaste el boton toggle");
});

//7 - Estructura: Crea un nou <li> amb createElement i afegeix-lo a una <ul> amb appendChild.

let botoAfegirItem = document.querySelector("#boto-afegir");
let llistaCompra = document.querySelector("#llista-compra");
botoAfegirItem.onclick = function(){
    let nouitem = document.createElement("li");
    nouitem.textContent = "formatge";
    llistaCompra.appendChild(nouitem);
}

//8 - Eliminació: Fes que un element desaparegui en fer-li clic usant el mètode remove().
let cuadroColorSalmon = document.querySelector('#element-eliminar');
    cuadroColorSalmon.onclick = function() {
    cuadroColorSalmon.remove();   
};