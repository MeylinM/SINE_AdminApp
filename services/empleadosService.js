/**
 * @file empleadosService.js
 * @description Servicio para gestionar empleados: obtener, buscar, agregar, activar y desactivar.
 * Usa la URL definida en `config.js` y devuelve resultados en formato JSON.
 */

import { EMPLEADO_URL } from "../config/config.js";
import { Alert } from "react-native";

/**
 * Obtiene todos los empleados activos desde la base de datos.
 *
 * @returns {Promise<Array>} Lista de empleados activos o array vacío si falla.
 */
export const obtenerEmpleados = async () => {
  try {
    console.log("Obteniendo empleados... haciendo petición a:", EMPLEADO_URL);
    const response = await fetch(`${EMPLEADO_URL}/activos`);

    if (!response.ok)
      throw new Error(
        `Error en la respuesta del servidor. Error HTTP: ${response.status}`
      );

    const data = await response.json();
    console.log("Datos obtenidos:", data);
    return data;
  } catch (error) {
    console.error("Error obteniendo empleados:", error);
    Alert.alert(
      "Error de conexión",
      "No se ha podido conectar con el servidor. Verifica tu conexión e inténtalo de nuevo."
    );
    return []; // Para evitar que falle el render
  }
};

/**
 * Busca un empleado por nombre exacto.
 *
 * @param {string} nombre - Nombre del empleado a buscar.
 * @returns {Promise<Object|null>} El empleado si existe o null si no se encuentra.
 */
export const buscarEmpleadoPorNombre = async (nombre) => {
  try {
    console.log(`Buscando al empleado: ${nombre}`);
    const response = await fetch(`${EMPLEADO_URL}/existe/${nombre}`);

    if (response.status === 404) {
      console.log(`No se ha encontrado ningún empleado llamado: ${nombre}`);
      return null;
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

/**
 * Reactiva un empleado que estaba inactivo.
 *
 * @param {number} id - ID del empleado a reactivar.
 * @returns {Promise<boolean>} true si fue reactivado correctamente, false si falla.
 */
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

/**
 * Agrega un nuevo empleado a la base de datos.
 *
 * @param {string} nombre - Nombre del nuevo empleado.
 * @returns {Promise<Object|null>} Empleado creado o null si hay error.
 */
export const agregarEmpleado = async (nombre) => {
  try {
    console.log(`Agregando empleado: ${nombre}`);
    const response = await fetch(EMPLEADO_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    if (!response.ok)
      throw new Error(`Error al añadir empleado. Error HTTP: ${response.status}`);

    const newEmployee = await response.json();
    console.log("Empleado agregado:", newEmployee);
    return newEmployee;
  } catch (error) {
    console.error("Error agregando empleado:", error);
    Alert.alert("Error", "No se pudo agregar el empleado. Inténtalo de nuevo.");
    return null;
  }
};

/**
 * Desactiva (elimina lógicamente) un empleado por su ID.
 *
 * @param {number} id - ID del empleado a desactivar.
 * @returns {Promise<void>}
 */
export const desactivarEmpleado = async (id) => {
  try {
    console.log(`Desactivando empleado con ID: ${id}`);
    const response = await fetch(`${EMPLEADO_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activo: false }), // Desactivación lógica
    });

    if (!response.ok)
      throw new Error(`Error al desactivar empleado. Error HTTP: ${response.status}`);

    console.log("Empleado desactivado con éxito.");
  } catch (error) {
    console.error("Error desactivando empleado:", error);
    Alert.alert(
      "Error",
      "No se pudo desactivar el empleado. Inténtalo de nuevo."
    );
  }
};