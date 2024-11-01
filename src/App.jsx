import { useEffect, useState } from "react";
import { Formulario } from "./componentes/Formulario.jsx";
import { ListaTarea } from "./componentes/ListaTarea.jsx";
import { ModalEditar } from "./componentes/ModalEditar.jsx";
import { ModalEliminar } from "./componentes/ModalEliminar.jsx";

import { v4 as uuidv4 } from "uuid";
import "./App.css";

export function App() {
  const [lista, setLista] = useState(() => {
    let localLista = localStorage.getItem("lista-tareas");
    return localLista !== null
      ? JSON.parse(localLista)
      : [
          {
            id: 1,
            titulo: "Título de ejemplo",
            descripcion: "Descripción de ejemplo",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("lista-tareas", JSON.stringify(lista));
  }, [lista]);

  function registrarTarea({ titulo, descripcion }) {
    const nuevaLista = [{ id: uuidv4(), titulo, descripcion }, ...lista];
    setLista(nuevaLista);
  }

  function editarTarea({ idTask, titulo, descripcion }) {
    const tarea = lista.find(({ id }) => id == idTask);

    tarea.titulo = titulo;
    tarea.descripcion = descripcion;

    const nuevaLista = lista.map((task) => {
      if (task.id == idTask) return tarea;
      return task;
    });

    setLista(nuevaLista);
  }

  function eliminarTarea({ idTask }) {
    const nuevaLista = lista.filter(({ id }) => id != idTask);
    setLista(nuevaLista);
  }

  return (
    <main className="main-container">
      <Formulario registrarTarea={registrarTarea} />

      <ListaTarea lista={lista} />

      <ModalEliminar eliminarTarea={eliminarTarea} />

      <ModalEditar editarTarea={editarTarea} />
    </main>
  );
}
