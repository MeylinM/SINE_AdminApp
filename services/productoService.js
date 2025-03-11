import HistorialProductos from "../model/producto";

const API_URL = "http://192.168.10.101:3000/historial"; // Reemplaza con la IP de tu servidor

// Obtener todas las bobinas desde la base de datos
export const obtenerBobinas = async () => {
  try {
    console.log(`Haciendo petición a: ${API_URL}`);
    const response = await fetch(API_URL);
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
