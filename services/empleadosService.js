const API_URL = "http://192.168.10.101:3000/usuario"; // Reemplázalo con la URL real

// Obtener todos los empleados desde la base de datos
export const obtenerEmpleados = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error en la respuesta del servidor");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error obteniendo empleados:", error);
    return []; // Retornamos un array vacío para evitar fallos en la UI
  }
};

// Agregar un nuevo empleado a la base de datos
export const agregarEmpleado = async (nombre) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });
    if (!response.ok) throw new Error("Error al añadir empleado");
    return await response.json();
  } catch (error) {
    console.error("Error agregando empleado:", error);
    return null; // Retornamos null si hay error
  }
};

// Eliminar un empleado de la base de datos
export const desactivarEmpleado = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activo: false }), // Marcamos como inactivo
    });
    if (!response.ok) throw new Error("Error al desactivar empleado");
  } catch (error) {
    console.error("Error desactivando empleado:", error);
  }
};