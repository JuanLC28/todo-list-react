import { useState } from "react";
import { Tarea } from "./Tarea.jsx";
import { Formulario } from "./Formulario.jsx";

import { generateUUID } from "./funciones.js";
import "./App.css";

export function App() {
  const [lista, setLista] = useState([]);

  function registrarTarea({ titulo, descripcion }) {
    const nuevaLista = [{ id: generateUUID(), titulo, descripcion }, ...lista];
    setLista(nuevaLista);
  }

  function editarTarea({ idTask }) {
    const tarea = lista.find(({ id }) => id === idTask);
    const tituloNuevo = prompt(
      "Actualize el título de la tarea!",
      tarea.titulo
    );
    const descripcionNueva = prompt(
      "Actualize el descripción de la tarea!",
      tarea.descripcion
    );

    if (tituloNuevo) tarea.titulo = tituloNuevo;
    if (descripcionNueva) tarea.descripcion = descripcionNueva;

    if (tituloNuevo === null && descripcionNueva === null) return;

    const nuevaLista = lista.map((task) => {
      if (task.id === idTask) return tarea;
      return task;
    });

    setLista(nuevaLista);
  }

  function eliminarTarea({ idTask }) {
    const confirmacion = confirm(
      `¿Estás seguro de eliminar la TAREA con ID ${idTask}?`
    );
    if (!confirmacion) return;

    const nuevaLista = lista.filter(({ id }) => id !== idTask);
    setLista(nuevaLista);
  }

  return (
    <main className="main-container">
      <section className="task-form">
        <h2>Nueva tarea</h2>

        <Formulario registrarTarea={registrarTarea} />
      </section>

      <section className="task-list">
        <h2>Lista de las tareas</h2>

        {lista.map(({ id, titulo, descripcion }) => {
          return (
            <Tarea
              key={id}
              id={id}
              titulo={titulo}
              descripcion={descripcion}
              editarTarea={editarTarea}
              eliminarTarea={eliminarTarea}
            />
          );
        })}
      </section>
    </main>
  );
}
