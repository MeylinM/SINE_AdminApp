const API_URL = "https://tu-servidor.com/api/empleados"; // Reemplázalo con la URL de tu backend

// Obtener todos los empleados desde la base de datos
export const obtenerEmpleados = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data; // Devolvemos la lista de empleados
  } catch (error) {
    console.error("Error obteniendo empleados:", error);
    return [];
  }
};

// Agregar un nuevo empleado a la base de datos
export const agregarEmpleado = async (nombre) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });
    return await response.json(); // Devolvemos el empleado creado
  } catch (error) {
    console.error("Error agregando empleado:", error);
  }
};

// Eliminar un empleado de la base de datos
export const eliminarEmpleado = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  } catch (error) {
    console.error("Error eliminando empleado:", error);
  }
};