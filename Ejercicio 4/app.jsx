// Realizar una página web utilizando HTML y React con sólo dos botones llamados “izquierdo” y “derecho”. Inicialmente solamente el botón “izquierdo” se encuentra habilitado. Al presionar el botón “izquierdo”, se deshabilita a si mismo y luego habilita al botón “derecho”. Luego al presionar el botón “derecho”, se deshabilita a si mismo y luego habilita al botón “izquierdo”. Todo esto permite que solo un botón este habilitado al mismo tiempo.

const { useState } = React;

function App() {

    const [botonIzquierdo, setBotonIzquierdo] = useState(false);
    const [botonDerecho, setBotonDerecho] = useState(true);


function cambiarIzquierdo(){
    setBotonIzquierdo(true);
    setBotonDerecho(false);
}

function cambiarDerecho(){
    setBotonIzquierdo(false);
    setBotonDerecho(true);
}

    return (
        <div>
            <button onClick={cambiarIzquierdo} disabled={botonIzquierdo}>Izquierdo</button>
            <button onClick={cambiarDerecho} disabled={botonDerecho}>Derecho</button>
        </div>
    );

}