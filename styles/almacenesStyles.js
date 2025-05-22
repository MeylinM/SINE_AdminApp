/**
 * @file almacenesStyles.js
 * @description Estilos para la pantalla de gestión de almacenes. 
 * Incluye estilos para listas, botones, modal y estructura visual general.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /** Contenedor principal de toda la vista */
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9", // Gris claro de fondo
    alignItems: "center",
    justifyContent: "space-between", // Distribuye elementos verticalmente
  },

  /** Contenedor externo de la lista */
  listWrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  /** Caja blanca que contiene la lista */
  listContainer: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    padding: 10,
    maxHeight: "100%", // Evita que se desborde
    borderWidth: 2,
    borderColor: "#019edf", // Azul corporativo
  },

  /** Título superior de la lista */
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#019edf", // Azul principal
    paddingVertical: 10,
    width: "100%",
    textAlign: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  /** Elemento individual de la lista */
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
    alignItems: "center",
  },

  /** Estilo para un item seleccionado */
  selectedItem: {
    backgroundColor: "#75c5f0", // Azul claro para destacar
  },

  /** Estilo aplicado a botones deshabilitados */
  disabledButton: {
    backgroundColor: "#ccc", // Gris para indicar inactividad
  },

  /** Contenedor de los botones principales (añadir, modificar, eliminar) */
  buttonsContainer: {
    marginTop: 20,
    width: "90%",
    paddingVertical: 0,
    alignItems: "center",
    marginBottom: 20,
  },

  /** Contenedor del modal (fondo semitransparente) */
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro translúcido
  },

  /** Caja blanca dentro del modal */
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

  /** Input dentro del modal */
  modalInput: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#019edf",
    borderRadius: 5,
    marginBottom: 15,
    textAlign: "center",
  },

  /** Contenedor de los botones dentro del modal */
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  /** Botón dentro del modal (confirmar o cancelar) */
  modalButton: {
    backgroundColor: "#019edf",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },

  /** Estilo para el botón de cancelar */
  cancelButton: {
    backgroundColor: "#ccc", // Gris
  },

  /** Texto dentro de los botones del modal */
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
