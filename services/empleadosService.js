import { Alert } from "react-native";

const API_URL = "https://sineserver-production.up.railway.app/usuario"; // Reemplázalo con la URL real

// Obtener todos los empleados desde la base de datos
export const obtenerEmpleados = async () => {
  try {
    console.log("Obteniendo empleados... haciendo petición a:", API_URL);
    const response = await fetch(API_URL+"/activos");
    if (!response.ok)
      throw new Error(
        "Error en la respuesta del servidor. Error HTTP:  + ${response.status}"
      );

    const data = await response.json();
    console.log("Datos obtenidos:", data);

    return data;
  } catch (error) {
    console.error("Error obteniendo empleados:", error);
    Alert.alert(
      "Error de conexion",
      "No se ha podido conectar con el servidor. Verifica tu conexion e intentalo de nuevo."
    );
    return []; // Retornamos un array vacío para evitar fallos en la UI
  }
};

// Agregar un nuevo empleado a la base de datos
export const agregarEmpleado = async (nombre) => {
  try {
    console.log("Agregando empleado: ${nombre}");
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    if (!response.ok)
      throw new Error(
        "Error al añadir empleado. Error HTTP: ${response.status}"
      );
    const newEmployee = await response.json();
    console.log("Empleado agregado:", newEmployee);

    return newEmployee;
  } catch (error) {
    console.error("Error agregando empleado:", error);
    Alert.alert("Error", "No se pudo agregar el empleado. Inténtalo de nuevo.");
    return null; // Retornamos null si hay error
  }
};

// Eliminar un empleado de la base de datos
export const desactivarEmpleado = async (id) => {
  try {
    console.log("Desactivando empleado con ID: ${id}");
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activo: false }), // Marcamos como inactivo
    });

    if (!response.ok)
      throw new Error(
        "Error al desactivar empleado. Error HTTP: ${response.status}"
      );
    console.log("Empleado desactivado con éxito.");
  } catch (error) {
    console.error("Error desactivando empleado:", error);
    Alert.alert(
      "Error",
      "No se pudo desactivar el empleado. Inténtalo de nuevo."
    );
  }
};
