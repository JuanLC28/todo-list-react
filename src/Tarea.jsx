export function Tarea({ id, titulo, descripcion, editarTarea, eliminarTarea }) {
  return (
    <article className="task-item">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button
        className="edit-button"
        onClick={() => editarTarea({ idTask: id })}
      >
        Editar
      </button>
      <button
        className="delete-button"
        onClick={() => eliminarTarea({ idTask: id })}
      >
        Eliminar
      </button>
    </article>
  );
}
