export function Formulario({ registrarTarea }) {
  function handleSubmitForm(e) {
    e.preventDefault();
    const campoTitulo = document.getElementById("tarea-titulo");
    const campoDescripcion = document.getElementById("tarea-descripcion");

    registrarTarea({
      titulo: campoTitulo.value,
      descripcion: campoDescripcion.value,
    });
    campoTitulo.value = "";
    campoDescripcion.value = "";
    campoTitulo.focus();
  }

  return (
    <section className="task-form">
      <h2>Nueva tarea</h2>
      
      <form className="form">
        <input
          type="text"
          className="task-input"
          placeholder="Título de la tarea"
          id="tarea-titulo"
        />
        <textarea
          className="task-description"
          placeholder="Descripción de la tarea"
          rows="5"
          id="tarea-descripcion"
        ></textarea>
        <button className="submit-button" onClick={handleSubmitForm}>
          Registrar
        </button>
      </form>
    </section>
  );
}
