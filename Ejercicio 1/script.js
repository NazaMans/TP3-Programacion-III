const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const opcion = document.getElementById("opcion");
const boton = document.getElementById("calcular");

const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

num2.addEventListener("input", validarCero);
opcion.addEventListener("change", validarCero);
boton.addEventListener("click", calcular);


function validarCero(){

    const num2Valor = parseFloat(num2.value);
    if (num2Valor === 0 && opcion.value === "division"){
        error.innerText = "No se puede dividir en 0";
        resultado.innerText = "";
        boton.disabled = true;
    }
    else {
        error.innerText = "";
        boton.disabled = false;
    }
}

function calcular(e){

    e.preventDefault();

   const numero1 = parseFloat(num1.value);
   const numero2 = parseFloat(num2.value);
    const operacion = opcion.value;

    switch (operacion) 
    {
        case "suma":
            resultado.innerText = `Resultado: ${numero1 + numero2}`;
            break;
        case "resta":
            resultado.innerText = `Resultado: ${numero1 - numero2}`;
            break;
        case "multiplicacion":
            resultado.innerText = `Resultado: ${numero1 * numero2}`;
            break;
        case "division":
                resultado.innerText = `Resultado: ${numero1 / numero2}`;
            break;
    }   

}
