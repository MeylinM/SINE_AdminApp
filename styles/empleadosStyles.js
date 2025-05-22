/**
 * @file empleadosStyles.js
 * @description Estilos para la pantalla de gestión de empleados.
 * Incluye lista de empleados, botones y diseño del modal.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /** Contenedor principal de la pantalla */
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9", // Fondo gris claro
    alignItems: "center",
    justifyContent: "space-between",
  },

  /** Contenedor general de la lista */
  listWrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  /** Caja blanca donde se muestra la lista de empleados */
  listContainer: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    padding: 10,
    maxHeight: 450, // Límite de altura para evitar desbordamiento
    borderWidth: 2,
    borderColor: "#019edf", // Borde azul corporativo
  },

  /** Encabezado de la lista */
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#019edf", // Color principal
    paddingVertical: 10,
    width: "100%",
    textAlign: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  /** Fila de empleado individual */
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", // Separador gris claro
    width: "100%",
    alignItems: "center",
  },

  /** Estilo para el empleado seleccionado */
  selectedItem: {
    backgroundColor: "#75c5f0", // Azul claro para destacar la selección
  },

  /** Estilo para un botón deshabilitado */
  disabledButton: {
    backgroundColor: "#ccc", // Gris para representar estado inactivo
  },

  /** Contenedor para los botones de acción (añadir, eliminar) */
  buttonsContainer: {
    width: "90%",
    paddingVertical: 20,
    alignItems: "center",
  },

  // ---------- MODAL ----------

  /** Contenedor del modal (fondo oscuro y centrado) */
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro con transparencia
  },

  /** Contenido blanco del modal */
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },

  /** Título del modal */
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#019edf", // Azul corporativo
  },

  /** Campo de entrada para el nombre del nuevo empleado */
  modalInput: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#019edf",
    borderRadius: 5,
    marginBottom: 15,
    textAlign: "center",
  },

  /** Contenedor de los botones del modal */
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  /** Botón de acción dentro del modal (Añadir/Cancelar) */
  modalButton: {
    backgroundColor: "#019edf",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },

  /** Botón de cancelar dentro del modal */
  cancelButton: {
    backgroundColor: "#ccc", // Gris neutro
  },

  /** Texto dentro de los botones del modal */
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
