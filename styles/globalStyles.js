/**
 * @file globalStyles.js
 * @description Estilos reutilizables para la aplicación SINE. 
 * Incluye estilos globales para contenedores, botones, textos e inputs.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /** Contenedor general centrado y con padding */
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9", // Fondo gris claro estándar
    alignItems: "center",       // Centra horizontalmente
    justifyContent: "center",   // Centra verticalmente
    padding: 20,                // Espaciado interior
  },

  /** Título principal */
  title: {
    fontSize: 24,               // Tamaño de letra grande
    fontWeight: "bold",
    color: "#4a4a4a",           // Gris oscuro para legibilidad
    marginBottom: 20,
    textAlign: "center",
  },

  /** Estilo general de los botones */
  button: {
    backgroundColor: "#019edf", // Azul corporativo
    padding: 15,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
  },

  /** Texto dentro de los botones */
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  /** Input de texto estándar */
  input: {
    backgroundColor: "#019edf", // Azul para destacar el campo
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: "center",        // Centra el texto en el input
  },
});