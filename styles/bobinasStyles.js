/**
 * @file bobinasStyles.js
 * @description Estilos para la pantalla de informe de bobinas. 
 * Incluye filtros, tabla de datos, botones y estilos responsivos.
 */

import { StyleSheet, Dimensions } from "react-native";

// Obtenemos el ancho de la pantalla para uso futuro si se quiere hacer responsive
const { width: screenWidth } = Dimensions.get("window");

export default StyleSheet.create({
  /** Contenedor principal */
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9", // Fondo gris claro
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  /** Título superior */
  title: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    textAlign: "center",
  },

  /** Filtros (input matrícula, estado, empleado) */
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "90%",
    alignItems: "center",
    marginBottom: 5,
    gap: 100, // Espacio entre filtros (puede adaptarse con media queries si se desea)
  },

  /** Inputs de texto para matrícula y empleado */
  input: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "25%",
    fontSize: 12,
    fontFamily: "sans-serif",
    textAlign: "center",
    height: 30,
  },

  /** Contenedor del selector de estado */
  pickerContainer: {
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "25%",
    alignSelf: "center",
    height: 30,
    justifyContent: "center",
  },

  /** Texto dentro del selector */
  pickerText: {
    padding: 5,
    fontSize: 12,
    color: "#333",
    height: "100%",
  },

  /** Zona táctil del picker */
  pickerTouchable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
  },

  /** Contenedor de la tabla */
  table: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    marginBottom: 15,
    width: 2000, // Tabla horizontal (scrollable)
    minHeight: "auto",
    borderWidth: 2,
    borderColor: "#019edf",
  },

  /** Fila del encabezado principal */
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#019edf",
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },

  /** Celda de encabezado individual */
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingVertical: 4,
    borderRightWidth: 1,
    borderRightColor: "#fff",
    fontSize: 12,
  },

  /** Agrupador de celdas para secciones anidadas (empleado y fecha) */
  headerGroup: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#fff",
  },

  /** Título de grupo de celdas (por ejemplo: INFORMACIÓN DEVOLUCIÓN) */
  headerCellBig: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingVertical: 4,
    fontSize: 12,
    backgroundColor: "#019edf",
    width: "100%",
  },

  /** Fila de subencabezados dentro de un grupo */
  subHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#017bb5",
    width: "100%",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },

  /** Celdas del subencabezado */
  subHeaderCell: {
    flex: 1,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingVertical: 4,
    fontSize: 11,
    borderRightWidth: 1,
    borderRightColor: "#fff",
  },

  /** Fila individual de datos */
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 5,
  },

  /** Celda de datos */
  cell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 3,
    fontSize: 11,
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },

  /** Contenedor de botones inferiores (por ejemplo: Exportar Excel) */
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
    marginBottom: 10,
    gap: 15,
  },

  /** Botón de acción */
  button: {
    backgroundColor: "#019edf",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 20,
    width: "35%",
    alignItems: "center",
  },
});