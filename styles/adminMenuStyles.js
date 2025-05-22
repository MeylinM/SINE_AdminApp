/**
 * @file adminMenuStyles.js
 * @description Estilos personalizados para la pantalla del menú de administrador.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /**
   * Imagen del encabezado (Header)
   * Se superpone en la parte superior de la pantalla.
   */
  headerImage: {
    position: "absolute",       // Se coloca por encima del contenido
    top: 0,                     // Pegado a la parte superior
    width: "112%",             // Se expande más allá del ancho para evitar márgenes en algunos dispositivos
    height: 300,                // Altura del encabezado
    resizeMode: "cover",        // La imagen se adapta sin deformarse
    marginBottom: 20,           // Separación inferior para el contenido siguiente
  },

  /**
   * Título principal (Bienvenido/a)
   */
  title: {
    fontSize: 24,               // Tamaño del texto
    fontWeight: "bold",         // Texto en negrita
    color: "#4a4a4a",           // Gris oscuro
    marginTop: 310,             // Espacio desde arriba para que no tape la imagen
    marginBottom: 30,           // Separación del siguiente componente
    textAlign: "center",        // Centrado horizontal
  },

  /**
   * Botones principales del menú
   */
  button: {
    backgroundColor: "#019edf", // Azul claro corporativo
    padding: 40,                // Espaciado interno generoso
    borderRadius: 25,           // Bordes redondeados
    width: "80%",               // Ocupa el 80% del ancho del contenedor
    alignItems: "center",       // Centrado del texto en el botón
    marginBottom: 40,           // Separación con el siguiente botón
  },

  /**
   * Texto inferior (SINE INGENIERIA ELECTRICA)
   */
  footer: {
    position: "absolute",       // Se posiciona al fondo
    bottom: 20,                 // 20px desde abajo
    marginTop: 20,
    fontSize: 14,
    color: "#0096FF",           // Azul brillante
  },

  /**
   * Botón de información (icono con "i")
   */
  infoButton: {
    position: "absolute",       // Flotante sobre la pantalla
    top: 35,                    // Ajuste desde la parte superior
    right: 15,                  // Pegado a la derecha
    zIndex: 10,                 // Se asegura de estar sobre otros elementos
    backgroundColor: "transparent", // Fondo transparente
    padding: 8,                 // Área de clic cómoda
  }
});
