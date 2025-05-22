/**
 * @file usuarioProductoService.js
 * @description Servicio para obtener el historial de acciones realizadas por empleados sobre productos (bobinas).
 * Consulta el endpoint `/usuario_producto` para recoger datos relacionados con los cambios de estado.
 */

import { USUARIO_PRODUCTO_URL } from "../config/config";

/**
 * Obtiene el informe de historial de empleados que han gestionado productos (bobinas).
 * Devuelve los registros con información como: producto_id, usuario_id, estado, fecha.
 *
 * @returns {Promise<Array>} Lista de objetos con datos del historial o [] si hay error.
 */
export const obtenerInforme = async () => {
  try {
    console.log(`Haciendo petición a: ${USUARIO_PRODUCTO_URL}`);

    const response = await fetch(USUARIO_PRODUCTO_URL);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    const data = await response.json();
    console.log("Datos obtenidos:", data);

    return data;
  } catch (error) {
    console.error("Error obteniendo informe:", error);
    return []; // Retornar lista vacía para no romper la app
  }
};

// Exportación por defecto para importación agrupada
export default {
  obtenerInforme,
};
