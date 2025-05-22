/**
 * @file AdminMenu.js
 * @description Pantalla principal del menú de administración.
 * Desde aquí se puede acceder a la gestión de empleados, almacenes e informes de bobinas.
 * También incluye un botón para acceder al sistema de ayuda.
 */

import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Para navegar entre pantallas
import globalStyles from "../styles/globalStyles"; // Estilos comunes a toda la app
import styles from "../styles/adminMenuStyles"; // Estilos específicos del menú de administrador
import InfoIcon from "react-native-vector-icons/Entypo"; // Icono de información
import * as ScreenOrientation from "expo-screen-orientation"; // Para bloquear orientación de pantalla

/**
 * Componente que representa el menú principal de administrador.
 * Bloquea la orientación en vertical y ofrece navegación a otras pantallas.
 * 
 * @returns {JSX.Element} Vista del menú con botones de navegación.
 */
export default function AdminMenu() {
  const navigation = useNavigation(); // Hook para cambiar de pantalla

  // Al cargar la pantalla, se bloquea la orientación en vertical (modo retrato)
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  return (
    <View style={globalStyles.container}>
      
      {/* Imagen del encabezado del menú */}
      <Image
        source={require("../assets/header_menu.png")}
        style={styles.headerImage}
      />

      {/* Botón de ayuda: redirige a la pantalla de ayuda principal */}
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => navigation.navigate("IndexHelp")}
      >
        <InfoIcon name="info-with-circle" size={35} color="#000000" />
      </TouchableOpacity>

      {/* Mensaje de bienvenida */}
      <Text style={styles.title}>Bienvenido/a</Text>

      {/* Botón para ir a la pantalla de gestión de empleados */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Empleados")}
      >
        <Text style={globalStyles.buttonText}>GESTIONAR EMPLEADOS</Text>
      </TouchableOpacity>

      {/* Botón para ir a la pantalla de gestión de almacenes */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Almacenes")}
      >
        <Text style={globalStyles.buttonText}>GESTIONAR ALMACENES</Text>
      </TouchableOpacity>

      {/* Botón para ir a la pantalla de informe de bobinas */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Bobinas")}
      >
        <Text style={globalStyles.buttonText}>INFORME DE BOBINAS</Text>
      </TouchableOpacity>

      {/* Pie de pantalla con nombre de la empresa */}
      <Text style={styles.footer}>SINE INGENIERIA ELECTRICA</Text>
    </View>
  );
}
