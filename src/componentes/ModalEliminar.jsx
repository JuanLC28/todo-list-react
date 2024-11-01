export function ModalEliminar({ eliminarTarea }) {
  function ocultarModalEliminar() {
    const modal = document.getElementById("modalEliminar");
    modal.style.display = "none";

    document.getElementById("id-tarea-eliminar").value = "";
  }

  function handleSubmitEliminar(e) {
    e.preventDefault();
    const idTask = document.getElementById("id-tarea-eliminar").value;
    ocultarModalEliminar();
    eliminarTarea({ idTask });
  }
  return (
    <div className="modal delete-modal" id="modalEliminar">
      <div className="modal-content">
        <h2>Confirmar Eliminación</h2>

        <p>¿Estás seguro de que deseas eliminar esta tarea?</p>

        <form id="form-eliminar" onSubmit={handleSubmitEliminar}>
          <input type="hidden" id="id-tarea-eliminar" />
        </form>

        <button className="confirm-button" form="form-eliminar" type="submit">
          Eliminar
        </button>

        <button className="cancel-button" onClick={ocultarModalEliminar}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
