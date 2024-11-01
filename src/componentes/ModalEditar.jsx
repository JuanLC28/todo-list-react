export function ModalEditar({ editarTarea }) {
  function ocultarModalEditar() {
    const modal = document.getElementById("modalEditar");
    modal.style.display = "none";

    document.getElementById("id-tarea-editar").value = "";
    document.getElementById("titulo-tarea-editar").value = "";
    document.getElementById("descripcion-tarea-editar").value = "";
  }

  function handleSubmitEditar(e) {
    e.preventDefault();
    const idTask = document.getElementById("id-tarea-editar").value;
    const titulo = document.getElementById("titulo-tarea-editar").value;
    const descripcion = document.getElementById(
      "descripcion-tarea-editar"
    ).value;

    ocultarModalEditar();
    editarTarea({ idTask, titulo, descripcion });
  }

  return (
    <div className="modal edit-modal" id="modalEditar">
      <div className="modal-content">
        <h2>Editar Tarea</h2>

        <form className="form" id="form-editar" onSubmit={handleSubmitEditar}>
          <input type="hidden" id="id-tarea-editar" />
          <input
            type="text"
            className="task-input"
            placeholder="Título de la tarea"
            id="titulo-tarea-editar"
          />
          <textarea
            className="task-description"
            placeholder="Descripción de la tarea"
            rows="5"
            id="descripcion-tarea-editar"
          ></textarea>
          <button className="submit-button" type="submit">
            Guardar Cambios
          </button>
        </form>

        <button className="cancel-button" onClick={ocultarModalEditar}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
