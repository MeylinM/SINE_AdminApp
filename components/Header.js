/**
 * @file Header.js
 * @description Componente visual que muestra una imagen de cabecera en la parte superior de la pantalla.
 * Este componente es reutilizable y puede ser usado en cualquier pantalla que necesite un encabezado visual.
 */

import React from "react";
import { View, Image } from "react-native";
import styles from "../styles/headerStyles"; // Estilos específicos para el encabezado

/**
 * @component Header
 * @returns {JSX.Element} Un contenedor que muestra una imagen de cabecera.
 */
export default function Header() {
  return (
    <View style={styles.headerContainer}>
      {/* Imagen del encabezado, adaptada al diseño general de la app */}
      <Image 
        source={require("../assets/Header_Empleados.png")} 
        style={styles.headerImage} 
      />
    </View>
  );
}
