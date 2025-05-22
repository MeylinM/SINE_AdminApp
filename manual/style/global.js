/**
 * @file globalHelpStyles.js
 * @description Estilos globales reutilizables para las pantallas del sistema de ayuda.
 * Define estilos comunes como encabezados, párrafos, títulos, listas y formato de imágenes.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /** Contenedor general con fondo gris claro */
  body: {
    flex: 1,
    backgroundColor: "#e1e5e6",
  },

  /** Imagen del encabezado (banner superior) */
  headerImage: {
    width: "100%",
    height: 110,
    resizeMode: "cover",
    marginTop: 34, // Deja espacio para notch/status bar
    marginBottom: -45, // Se solapa ligeramente con el contenido
  },

  /** Imagen del pie de página */
  footerImage: {
    width: "100%",
    height: 60,
    resizeMode: "contain",
    marginTop: 30,
  },

  /** Título principal grande y azul */
  title: {
    color: "#019edf",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  /** Párrafos justificados con buen interlineado */
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 20,
    textAlign: "justify",
  },

  /** Texto en negrita */
  bold: {
    fontWeight: "bold",
  },

  /** Lista de elementos (contenedor) */
  list: {
    width: "100%",
  },

  /** Ítem de lista (• Texto) */
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    color: "#333",
  },

  /** Subtítulo de sección */
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    marginBottom: 10,
  },
});
