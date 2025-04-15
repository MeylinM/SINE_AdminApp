import {USUARIO_PRODUCTO_URL} from "../config/config";

//Obtener empleados que se encargaron de las bobinas
export const obtenerInforme = async () => {
  try{
    console.log(`Haciendo petición a: ${USUARIO_PRODUCTO_URL}`);
    const response = await fetch(USUARIO_PRODUCTO_URL);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    const data = await response.json();
    console.log("Datos obtenidos:", data);
    return data;
  }catch (error) {
    console.error("Error obteniendo informe:", error);
    return [];
  }

};
// Exportar función para que se pueda usar en `Bobinas.js`
export default {
  obtenerInforme,
};