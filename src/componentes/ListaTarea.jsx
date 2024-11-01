import { Tarea } from "./Tarea";

export function ListaTarea({ lista }) {
  function mostrarModalEliminar({ idTask }) {
    document.getElementById("id-tarea-eliminar").value = idTask;

    const modal = document.getElementById("modalEliminar");
    modal.style.display = "flex";
  }

  function mostrarModalEditar({ idTask }) {
    const tarea = lista.find(({ id }) => id === idTask);

    document.getElementById("id-tarea-editar").value = tarea.id;
    document.getElementById("titulo-tarea-editar").value = tarea.titulo;
    document.getElementById("descripcion-tarea-editar").value =
      tarea.descripcion;

    const modal = document.getElementById("modalEditar");
    modal.style.display = "flex";
  }

  return (
    <section className="task-list">
      <h2>Lista de las tareas</h2>

      {lista.map(({ id, titulo, descripcion }) => {
        return (
          <Tarea
            key={id}
            id={id}
            titulo={titulo}
            descripcion={descripcion}
            mostrarModalEditar={mostrarModalEditar}
            mostrarModalEliminar={mostrarModalEliminar}
          />
        );
      })}
    </section>
  );
}
