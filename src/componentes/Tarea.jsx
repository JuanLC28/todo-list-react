export function Tarea({
  id,
  titulo,
  descripcion,
  mostrarModalEditar,
  mostrarModalEliminar,
}) {
  return (
    <article className="task-item">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button
        className="edit-button"
        onClick={() => mostrarModalEditar({ idTask: id })}
      >
        Editar
      </button>
      <button
        className="delete-button"
        onClick={() => mostrarModalEliminar({ idTask: id })}
      >
        Eliminar
      </button>
    </article>
  );
}
