// Escribir un programa con HTML+React con formulario que permita calcular el IMC de una persona. Luego de realizar el cálculo, mostrar un mensaje con las siguientes características:
// •
// Si IMC < 18.5 mostrar un mensaje en tono amarillo indicando que se trata un nivel bajo.
// •
// Si IMC está entre 18.5 y 24.9 mostrar un mensaje en tono verde indicando que se trata de un nivel normal.
// •
// Si IMC está entre 25 y 29.9 mostrar un mensaje en tono naranja indicando que se trata de un nivel de sobrepeso.
// •
// Si IMC es mayor o igual a 30 mostrar un mensaje en tono rojo indicando que se trata de un nivel de obesidad.

const { useState } = React;

function App() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    const [menResultado, setMensaje] = useState("");
    const [color, setColor] = useState("");

    
    function mostrarMensaje(resul){
        if (resul < 18.5){
            setMensaje("Nivel bajo");
            setColor("yellow");
        }
        if (resul >= 18.5 && resul <= 24.9){
            setMensaje("Nivel normal");
            setColor("green");
        }
        if (resul >= 25 && resul <= 29.9){
            setMensaje("Nivel de sobrepeso");
            setColor("orange");
        }
        if (resul >= 30){
            setMensaje("Nivel de obesidad");
            setColor("red");
        }
    }

    function calcularIMC(e) {
        
        e.preventDefault();

        const resultado = parseFloat(peso / (altura * altura));
        setImc(resultado.toFixed(2));
        mostrarMensaje(resultado)
    }

    return (
        <div>
            <h1>Calculadroa IMC</h1>
            <form >
                <label >Ingresar Peso en kilogramos</label>
                <br />
                <input type="text"  placeholder="Peso" 
                value={peso}
                onChange={(e) => setPeso(e.target.value)}/>
                <br />
                <br />
                <label >Ingresar Altura en metros</label>
                <br />
                <input type="text" placeholder="Altura"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}/>
                <br />
                <br />
                <input type="submit" value="Calcular" onClick={calcularIMC}/>
            </form>
            <br />
            <br />
            <p>Su IMC es: {imc}</p>
            <p style={{color}}>{menResultado}</p>

        </div>
    )
}