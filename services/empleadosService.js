import {EMPLEADO_URL} from "../config/config.js";
import { Alert } from "react-native";

// Obtener todos los empleados desde la base de datos
export const obtenerEmpleados = async () => {
  try {
    console.log("Obteniendo empleados... haciendo petición a:", EMPLEADO_URL);
    const response = await fetch(EMPLEADO_URL+"/activos");
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

export const buscarEmpleadoPorNombre = async (nombre) => {
  try {
    console.log(`Buscando al empleado: ${nombre}`);
    const response = await fetch(`${EMPLEADO_URL}/existe/${nombre}`);

    if (response.status === 404) {
      console.log(`No se ha encontrado ningun empleado llamado: ${nombre}`);
      return null; // No existe
    }

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const empleado = await response.json();
    return empleado;
  } catch (error) {
    console.error("Error buscando empleado:", error);
    Alert.alert("Error", "No se pudo verificar el nombre del empleado.");
    return null;
  }
};

export const activarEmpleado = async (id) => {
  try {
    const response = await fetch(`${EMPLEADO_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activo: true }),
    });

    if (!response.ok)
      throw new Error(`Error HTTP: ${response.status}`);

    console.log("Empleado reactivado");
    return true;
  } catch (error) {
    console.error("Error reactivando empleado:", error);
    Alert.alert("Error", "No se pudo reactivar el empleado.");
    return false;
  }
};

// Agregar un nuevo empleado a la base de datos
export const agregarEmpleado = async (nombre) => {
  try {
    console.log(`Agregando empleado: ${nombre}`);
    console.log(JSON.stringify({ nombre }));
    const response = await fetch(EMPLEADO_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    if (!response.ok)
      throw new Error(
        `Error al añadir empleado. Error HTTP: ${response.status}`
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
    const response = await fetch(`${EMPLEADO_URL}/${id}`, {
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
