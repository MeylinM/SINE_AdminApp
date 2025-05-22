/**
 * @file almacenesService.js
 * @description Servicio para gestionar las operaciones CRUD de almacenes desde el frontend.
 * Utiliza la URL base definida en config.js y realiza llamadas HTTP al backend.
 */

import { ALMACEN_URL } from "../config/config.js";
import { Alert } from "react-native";

/**
 * Obtiene todos los almacenes activos desde la base de datos.
 * 
 * @returns {Promise<Array>} Lista de almacenes activos o [] si falla.
 */
export const obtenerAlmacenes = async () => {
  try {
    console.log("Obteniendo Almacenes... haciendo petición a:", ALMACEN_URL);
    const response = await fetch(`${ALMACEN_URL}/activos`);

    if (!response.ok)
      throw new Error(`Error en la respuesta del servidor. Error HTTP: ${response.status}`);

    const data = await response.json();
    console.log("Datos obtenidos:", data);

    return data;
  } catch (error) {
    console.error("Error obteniendo Almacenes:", error);
    Alert.alert(
      "Error de conexión",
      "No se ha podido conectar con el servidor. Verifica tu conexión e inténtalo de nuevo."
    );
    return []; // Para que la UI no falle
  }
};

/**
 * Agrega un nuevo almacén a la base de datos.
 * 
 * @param {string} nombre - Nombre del nuevo almacén.
 * @returns {Promise<Object|null>} El almacén creado o null si falla.
 */
export const agregarAlmacen = async (nombre) => {
  try {
    console.log(`Agregando Almacén: ${nombre}`);
    const response = await fetch(ALMACEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    if (!response.ok)
      throw new Error(`Error al añadir Almacén. Error HTTP: ${response.status}`);

    const almacenNuevo = await response.json();
    console.log("Almacén agregado:", almacenNuevo);

    return almacenNuevo;
  } catch (error) {
    console.error("Error agregando almacén:", error);
    Alert.alert("Error", "No se pudo agregar el almacén. Inténtalo de nuevo.");
    return null;
  }
};

/**
 * Busca un almacén por su nombre.
 * 
 * @param {string} nombre - Nombre del almacén a buscar.
 * @returns {Promise<Object|null>} Almacén encontrado o null si no existe.
 */
export const buscarAlmacenPorNombre = async (nombre) => {
  try {
    console.log(`Buscando el almacén: ${nombre}`);
    const response = await fetch(`${ALMACEN_URL}/existe/${nombre}`);

    if (response.status === 404) {
      console.log(`No se ha encontrado ningún almacén llamado: ${nombre}`);
      return null;
    }

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const almacen = await response.json();
    return almacen;
  } catch (error) {
    console.error("Error buscando almacén:", error);
    Alert.alert("Error", "No se pudo verificar el nombre del almacén.");
    return null;
  }
};

/**
 * Reactiva un almacén inactivo.
 * 
 * @param {number} id - ID del almacén.
 * @returns {Promise<boolean>} true si se reactivó correctamente, false si falla.
 */
export const activarAlmacen = async (id) => {
  try {
    const response = await fetch(`${ALMACEN_URL}/activo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activo: true }),
    });

    if (!response.ok)
      throw new Error(`Error HTTP: ${response.status}`);

    console.log("Almacén reactivado");
    return true;
  } catch (error) {
    console.error("Error reactivando el almacén:", error);
    Alert.alert("Error", "No se pudo reactivar el almacén.");
    return false;
  }
};

/**
 * Modifica el nombre de un almacén existente.
 * 
 * @param {number} id - ID del almacén.
 * @param {string} nombre - Nuevo nombre a asignar.
 * @returns {Promise<boolean>} true si fue exitoso, false si falla.
 */
export const modificarAlmacen = async (id, nombre) => {
  try {
    console.log(`Modificando el almacén con ID: ${id}`);
    const response = await fetch(`${ALMACEN_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    if (!response.ok)
      throw new Error(`Error HTTP: ${response.status}`);

    console.log("Almacén modificado");
    return true;
  } catch (error) {
    console.error("Error al modificar almacén:", error);
    Alert.alert("Error", "No se pudo modificar el almacén.");
    return false;
  }
};

/**
 * Marca un almacén como inactivo (desactivado) en la base de datos.
 * 
 * @param {number} id - ID del almacén.
 * @returns {Promise<void>}
 */
export const desactivarAlmacen = async (id) => {
  try {
    console.log(`Desactivando almacén con ID: ${id}`);
    const response = await fetch(`${ALMACEN_URL}/activo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activo: false }),
    });

    if (!response.ok)
      throw new Error(`Error HTTP: ${response.status}`);

    console.log("Almacén desactivado con éxito.");
  } catch (error) {
    console.error("Error desactivando almacén:", error);
    Alert.alert(
      "Error",
      "No se pudo desactivar el almacén. Inténtalo de nuevo."
    );
  }
};