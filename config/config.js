/**
 * URL base del endpoint para gestionar almacenes.
 * Se utiliza para obtener, crear, actualizar o eliminar almacenes desde el servidor.
 * 
 * @constant {string}
 */
export const ALMACEN_URL = "https://sine-server.up.railway.app/almacen";

/**
 * URL base del endpoint para gestionar empleados (usuarios).
 * Permite realizar operaciones CRUD sobre los usuarios del sistema.
 * 
 * @constant {string}
 */
export const EMPLEADO_URL = "https://sine-server.up.railway.app/usuario";

/**
 * URL base del endpoint para acceder al historial de productos.
 * Se utiliza para obtener información histórica relacionada con los productos registrados.
 * 
 * @constant {string}
 */
export const PRODUCTO_URL = "https://sine-server.up.railway.app/historial";

/**
 * URL base del endpoint para la tabla usuario_producto.
 * Registra las transiciones de estado de productos asociadas a un usuario.
 * 
 * @constant {string}
 */
export const USUARIO_PRODUCTO_URL = "https://sine-server.up.railway.app/usuario_producto";
