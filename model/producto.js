/**
 * @file HistorialProductos.js
 * @description Clase que representa el historial de un producto, incluyendo información
 * sobre su estado, ubicación, obra, empleados involucrados, fechas y observaciones.
 */

class HistorialProductos {
  /**
   * Crea una instancia de HistorialProductos.
   * 
   * @param {number} id - Identificador único del historial.
   * @param {string} matricula - Matrícula del producto.
   * @param {string} nombre_almacen - Nombre del almacén asociado.
   * @param {string} ot - Código de la obra o número de orden de trabajo.
   * @param {string} descripcion_obra - Descripción detallada de la obra.
   * @param {string} estado - Estado actual del producto (ej. "RECIBIDO", "PARA DEVOLVER").
   * @param {string} empleado1 - Nombre del primer empleado que interactuó con el producto.
   * @param {string} fecha1 - Fecha de la primera acción registrada.
   * @param {string} empleado2 - Nombre del segundo empleado que interactuó con el producto.
   * @param {string} fecha2 - Fecha de la segunda acción registrada.
   * @param {string} empleado3 - Nombre del tercer empleado que interactuó con el producto.
   * @param {string} fecha3 - Fecha de la tercera acción registrada.
   * @param {string} observaciones - Observaciones acumuladas sobre el producto.
   */
  constructor(
    id,
    matricula,
    nombre_almacen,
    ot,
    descripcion_obra,
    estado,
    empleado1,
    fecha1,
    empleado2,
    fecha2,
    empleado3,
    fecha3,
    observaciones
  ) {
    this.id = id;
    this.matricula = matricula;
    this.nombre_almacen = nombre_almacen;
    this.ot = ot;
    this.descripcion_obra = descripcion_obra;
    this.estado = estado;
    this.empleado1 = empleado1;
    this.fecha1 = fecha1;
    this.empleado2 = empleado2;
    this.fecha2 = fecha2;
    this.empleado3 = empleado3;
    this.fecha3 = fecha3;
    this.observaciones = observaciones;
  }

  /**
   * Crea una instancia de HistorialProductos a partir de un objeto (por ejemplo, una fila de la base de datos).
   *
   * @param {Object} row - Objeto con los datos del historial del producto.
   * @param {number} row.id
   * @param {string} row.matricula
   * @param {string} row.almacen
   * @param {string} row.obra
   * @param {string} row.descripcion_obra
   * @param {string} row.estado
   * @param {string} row.empleado1
   * @param {string} row.fecha1
   * @param {string} row.empleado2
   * @param {string} row.fecha2
   * @param {string} row.empleado3
   * @param {string} row.fecha3
   * @param {string} row.observaciones
   * 
   * @returns {HistorialProductos} Nueva instancia con los datos del objeto.
   */
  static fromRow(row) {
    return new HistorialProductos(
      row.id,
      row.matricula,
      row.almacen,             // Aquí mapeamos 'almacen' del objeto a 'nombre_almacen'
      row.obra,                // Aquí mapeamos 'obra' del objeto a 'ot'
      row.descripcion_obra,
      row.estado,
      row.empleado1,
      row.fecha1,
      row.empleado2,
      row.fecha2,
      row.empleado3,
      row.fecha3,
      row.observaciones
    );
  }
}

export default HistorialProductos;