const listaPalabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

const ingreso = document.getElementById("palabras");
const boton = document.getElementById("filtrar");
const listaOriginal = document.getElementById("listaOriginal");
const listaFiltrada = document.getElementById("listaFiltrada");

mostrarPalabras();
boton.addEventListener("click", filtrarPalabras);

function mostrarPalabras(){
    
    listaOriginal.innerHTML = "";

    listaPalabras.forEach(palabra => {
        const li = document.createElement("li");
        li.innerText = palabra;
        listaOriginal.appendChild(li);
    });
    
}

function filtrarPalabras(){

    const palabraIngresada = ingreso.value;

    if (palabraIngresada.trim() === "") {
        listaFiltrada.innerHTML = "Error, no escribio nada";
        return;
    }

    
    const palabrasFiltradas = listaPalabras.filter(palabra => palabra.toLowerCase().includes(palabraIngresada.trim().toLowerCase()));

    listaFiltrada.innerHTML = "";
    palabrasFiltradas.forEach(palabra => {
        const li = document.createElement("li");
        li.innerText = palabra;
        listaFiltrada.appendChild(li);
    });
}