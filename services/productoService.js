/**
 * @file productoService.js
 * @description Servicio para obtener el historial de productos (bobinas) desde el backend.
 * Transforma los datos crudos en instancias de `HistorialProductos`.
 */

import { PRODUCTO_URL } from "../config/config"; // Ruta base del endpoint
import HistorialProductos from "../model/producto"; // Clase para mapear los datos

/**
 * Obtiene todas las bobinas desde la base de datos y las transforma en objetos `HistorialProductos`.
 * 
 * @returns {Promise<Array<HistorialProductos>>} Lista de bobinas formateadas o array vacío si hay error.
 */
export const obtenerBobinas = async () => {
  try {
    console.log(`Haciendo petición a: ${PRODUCTO_URL}`);
    
    const response = await fetch(PRODUCTO_URL);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    const data = await response.json();

    // Convertimos cada fila del array en una instancia del modelo HistorialProductos
    const productos = data.map((row) => HistorialProductos.fromRow(row));

    console.log("Datos obtenidos:", productos);
    return productos;
  } catch (error) {
    console.error("Error obteniendo bobinas:", error);
    return []; // En caso de error, devolvemos array vacío para evitar errores en la UI
  }
};

// Exportación por defecto para uso agrupado
export default {
  obtenerBobinas,
};