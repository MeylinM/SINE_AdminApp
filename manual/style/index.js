/**
 * @file styles/index.js
 * @description Estilos específicos para la pantalla de índice de ayuda (AyudaIndex.js),
 * donde se muestra la bienvenida y los enlaces a las distintas secciones del manual.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /** Contenedor del contenido principal */
  content: {
    paddingHorizontal: 25, // Márgenes laterales
    paddingTop: 60,        // Espacio superior (despeja el header)
    paddingBottom: 20,     // Espacio inferior
    alignItems: "center",  // Centra los elementos horizontalmente
    width: "100%",         // Ocupa todo el ancho
  },

  /** Estilo para los enlaces a las secciones de ayuda */
  linkText: {
    color: "#019edf",                // Color azul corporativo
    fontSize: 18,                    // Tamaño medio
    textDecorationLine: "underline",// Subrayado para indicar que es un enlace
    marginVertical: 10,             // Espaciado arriba y abajo
    textAlign: "center",            // Centrado horizontal
  },
});
