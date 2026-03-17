# Documentación del Script

## Descripción
- Unos cuantos javas encadenados hacia un html de prueba, para comenzar a ver como funciona GitHub

## Ejercicios

### Ejercicio 1
**Enunciado:**  
- 1. Selecció: Usa querySelector per canviar el color d'un <h1> quan la pàgina carregui.
**Solución:**
- 1. let titol = document.querySelector("#titol-principal");
        titol.style.color = "blue"
        
### Ejercicio 2
**Enunciado:**  
- 2. Contingut: Fes que un paràgraf <p> mostri "Hola Món" usant textContent
**Solución:**
- 2. let parraf = document.querySelector("#paragraf-hola")
        parraf.textContent = "Hola món"

### Ejercicio 3
**Enunciado:**  
- 3. Atributs: Canvia la 'src' d'una imatge <img> usant setAttribute.
**Solución:**
- 3. let imagen = document.querySelector("#imatge-canviant")
        imagen.setAttribute ("src", "https://www.pngmart.com/files/22/Mike-Wazowski-Meme-PNG-HD-Isolated.png").

### Ejercicio 5 - Classes: 
**Enunciado**
- 5. Crea un botó que afegeixi/tregui la classe 'actiu' amb classList.toggle.
**Solución**
    let boton = document.querySelector ("#boto-alerta");
    let caixa = document.querySelector ("#caixa-estil");
        boton.onclick = function() {
        alert("Holaa, has pulsado el boton");
        caixa.classList.toggle("dark-mode");
    }

### Ejercicio 6 - Esdeveniments: 
- 6. Afegeix un addEventListener a un botó perquè tregui una alerta (alert).
**Solución**
    let botonAlerta = document.querySelector ("#boto-toggle")
        botonAlerta.addEventListener("click", function() {
        alert("pulsaste el boton toggle");
});

### 7 - Estructura: 
- 7. Crea un nou <li> amb createElement i afegeix-lo a una <ul> amb appendChild.
**Solución**
    let botoAfegirItem = document.querySelector("#boto-afegir");
    let llistaCompra = document.querySelector("#llista-compra");
        botoAfegirItem.onclick = function(){
    let nouitem = document.createElement("li");
        nouitem.textContent = "formatge";
        llistaCompra.appendChild(nouitem);
}

### 8 - Eliminació: 
Fes que un element desaparegui en fer-li clic usant el mètode remove().
**Solución**
let cuadroColorSalmon = document.querySelector                  
    ('#element-eliminar');
        cuadroColorSalmon.onclick = function() {
        cuadroColorSalmon.remove();   
};