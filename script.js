// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("projectForm");
  const grid = document.getElementById("projectsGrid");

  let tareas = [];

  function crearTarjeta(tarea) {
    const col = document.createElement("div");
    col.className = "col";

    const tachado = tarea.completado ? "text-decoration-line-through text-muted" : "";

    col.innerHTML =`
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title ${tachado}">${tarea.nombre}</h5>
          <p class="card-text ${tachado}">${tarea.descripcion || ""}</p>
          <p class="text-muted small ${tachado}">Fecha límite: ${tarea.fecha || "Sin definir"}</p>
        </div>
        <div class="card-footer text-end">
          <button class="btn btn-sm btn-outline-success me-1"><i class="fas fa-check"></i> Tachar</button>
          <button class="btn btn-sm btn-outline-danger me-1"><i class="fas fa-trash"></i> Eliminar</button>
          <button class="btn btn-sm btn-outline-primary"><i class="fas fa-edit"></i> Editar</button>
        </div>
      </div>
    `;

    const btnTachar = col.querySelector(".btn-outline-success");
    const btnEliminar = col.querySelector(".btn-outline-danger");
    const btnEditar = col.querySelector(".btn-outline-primary");
    // Tachar
    btnTachar.addEventListener("click", () => {
      tarea.completado = !tarea.completado;
      col.querySelectorAll(".card-title, .card-text, .text-muted").forEach(el => {
        el.classList.toggle("text-decoration-line-through");
        el.classList.toggle("text-muted");
      });
    });

}})
    
