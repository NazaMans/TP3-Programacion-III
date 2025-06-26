// Realiza una petición GET a la API de JSONPlaceholder para obtener todos las "tareas" (/todos). Luego, utiliza forEach y filter para quedarte solo con las tareas que han sido completadas (completed: true) y mostrarlas en el HTML dentro de una lista <ul>.

const contenido = document.getElementById("contenido");
const boton = document.getElementById("boton");

boton.addEventListener("click", async () => {

    respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");

    contenido.innerHTML = "";
    if (!respuesta.ok){
        errorMessageDiv.textContent = `Hubo un problema: ${response.status} - ${response.statusText}`;
          return;
    } 

    const tareas = await respuesta.json();
    const tareasHechas = tareas.filter(tareas => tareas.completed === true);

    tareasHechas.forEach(tarea => {
        const ul = document.createElement("ul");
        ul.innerHTML = `
         <p><strong>ID:</strong> ${tarea.id}</p>
              <p><strong>Título:</strong> ${tarea.title}</p>
              <p><strong>Completado:</strong> ${
                tarea.completed ? "Sí" : "No"
              }</p>
        `
        contenido.appendChild(ul);

        //Lo que puse en el innerHTML es lo que esta en su clase del 06-02

    })

    // const li = document.createElement("li");
    //     li.innerText = palabra;
    //     listaOriginal.appendChild(li);
});