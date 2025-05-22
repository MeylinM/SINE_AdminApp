/**
 * @file empleados.js
 * @description Estilos específicos para la pantalla de ayuda de empleados.
 * Incluye estilos para contenedores, imágenes, filas de contenido y textos.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /** Contenedor principal del contenido de ayuda */
  content: {
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 30,
    alignItems: "center",
    width: "100%",
  },

  /** Caja informativa (bloques celestes con borde redondeado) */
  box: {
    backgroundColor: "#cceeff",
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
    width: "100%",
  },

  /** Título dentro de la caja informativa */
  boxTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },

  /** Título de sección destacado */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#019edf",
  },

  /** Subtítulo para subsecciones A, B, C... */
  subheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    color: "#019edf",
    width: "100%",
  },

  /** Fila que contiene imagen + texto en horizontal */
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 25,
    width: "100%",
  },

  /** Imagen vertical típica (pantallazos altos) */
  image: {
    width: 150,
    height: 300,
    marginRight: 12,
    borderRadius: 8,
  },

  /** Bloque que contiene imagen centrada en vertical */
  bloqueImagenVertical: {
    alignItems: "center",
    marginBottom: 25,
    width: "100%",
  },

  /** Imagen horizontal (anchas y cortas) */
  imageHorizontal: {
    width: 300,
    height: 150,
    marginRight: 12,
    borderRadius: 8,
    marginBottom: 15,
  },

  /** Texto descriptivo debajo de una imagen */
  textoDebajo: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },

  /** Texto justificado a la derecha de la imagen */
  text: {
    flex: 1,
    fontSize: 15,
    textAlign: "justify",
    color: "#333",
  },

  /** Estilo para un botón de volver (texto grande) */
  back: {
    color: "#019edf",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
});
