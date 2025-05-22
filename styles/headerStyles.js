/**
 * @file HeaderStyles.js
 * @description Estilos aplicados al componente de cabecera (`Header.js`), 
 * incluyendo el contenedor general y la imagen del encabezado.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /** Contenedor del header (envuelve la imagen) */
  headerContainer: {
    width: "100%",              // Ocupa todo el ancho disponible
    alignItems: "center",       // Centra horizontalmente la imagen
    backgroundColor: "#d9d9d9", // Fondo gris claro (puedes cambiarlo)
    marginBottom: 15,           // Espaciado inferior respecto al contenido
  },

  /** Imagen del encabezado */
  headerImage: {
    width: "112%",              // Ligeramente más ancho para cubrir bordes
    height: 110,                // Altura definida, ajustable según diseño
    resizeMode: "cover",        // Escala la imagen sin distorsión
  },
});