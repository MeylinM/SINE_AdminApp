import {PRODUCTO_URL} from "../config/config"; // Asegúrate de que la ruta sea correcta
import HistorialProductos from "../model/producto";

// Obtener todas las bobinas desde la base de datos
export const obtenerBobinas = async () => {
  try {
    console.log(`Haciendo petición a: ${PRODUCTO_URL}`);
    const response = await fetch(PRODUCTO_URL);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    const data = await response.json();
    const productos = data.map((row) => HistorialProductos.fromRow(row));
    console.log("Datos obtenidos:", data);
    return data;
  } catch (error) {
    console.error("Error obteniendo bobinas:", error);
    return [];
  }
};

// Exportar función para que se pueda usar en `Bobinas.js`
export default {
  obtenerBobinas,
};
