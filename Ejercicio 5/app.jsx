// Desarrollar una página web utilizando HTML y React que contenga un formulario para realizar operaciones entre dos números ingresados mediante campos <input>. La operación a realizar (suma, resta, multiplicación o división) debe seleccionarse mediante un elemento <select>. Al hacer clic en el botón "Calcular", se debe ejecutar la operación seleccionada y mostrar el resultado. Condición especial: Si el usuario selecciona la operación de división, el botón "Calcular" debe deshabilitarse, impidiendo que se realice la operación.

const { useState } = React;

function App(){

    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);

    const [opcion, setOpcion] = useState("suma");
    const [resultado, setResultado] = useState("");
    const [error, setError] = useState("");

    const [botonHabilitado, setBotonHabilitado] = useState(false);

    function validarCero(num2Valor, opcionActual) {

        setBotonHabilitado(false);

        if (opcionActual === "division"){
            if (num2Valor === 0 || num2Valor === null){
                setError("No se puede dividir por 0");
                setResultado("");
                setBotonHabilitado(true);
            } else {
                setError("");
                setBotonHabilitado(false);
            }

        } 

        }

    function calcular(e){

        e.preventDefault();

        if (num1 === null || num2 === null) {
            setResultado("Ingrese numeros");
            return;
        }

        switch (opcion) {
            case "suma":
                setResultado(`Resultado: ${num1 + num2}`);
                break;
            case "resta":
                setResultado(`Resultado: ${num1 - num2}`);
                break;
            case "multiplicacion":
                setResultado(`Resultado: ${num1 * num2}`);
                break;
            case "division":
                setResultado(`Resultado: ${num1 / num2}`);
                break;
    }

}

    function numero2(e){

        const valorNum = Number(e.target.value);

        setNum2(valorNum);

        validarCero(valorNum, opcion);
    }

    function validarNumYSelec(e){
        const opcionF = e.target.value;
        
        setOpcion(opcionF);
        
        validarCero(num2, opcionF);
    }

    return(
        

    <div>
        <form>
            <label >Numero 1</label>
            <br />
            <input type="number" onChange={(e) => setNum1(Number(e.target.value))}/>
            <br />
            <br />
            <label >Numero 2</label>
            <br />
            <input type="number" onChange={numero2}/>
            <br />
            <br />
            <select onChange={validarNumYSelec} value={opcion}>
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicacion</option>
                <option value="division">Division</option>
            </select>
            <br />
            <br />
            <input type="submit" value="Calcular" onClick={calcular} disabled={botonHabilitado}/>
        </form>
        <br />
        <br />
        <p>{resultado}</p>
        <p>{error}</p>
    </div> 

    )
}