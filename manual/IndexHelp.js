/**
 * @file AyudaIndex.js
 * @description Pantalla principal del sistema de ayuda de la app SINE.
 * Muestra una introducción general al manual de usuario y enlaces a las secciones
 * de ayuda para empleados, almacenes y bobinas.
 */

import React from "react"; // Importamos React para poder usar componentes
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native"; // Importamos componentes de React Native
import { useNavigation } from "@react-navigation/native"; // Hook para navegar entre pantallas
import globalStyles from "./style/global"; // Estilos generales compartidos entre pantallas
import contentStyles from "./style/index"; // Estilos específicos para esta pantalla

/**
 * Pantalla de inicio del sistema de ayuda.
 * Muestra texto explicativo y botones para ir a otras secciones de ayuda.
 */
export default function AyudaIndex() {
  const navigation = useNavigation(); // Obtenemos la herramienta para navegar a otras pantallas

  return (
    <View style={{ flex: 1 }}>
      {/* ScrollView permite que la pantalla sea desplazable si el contenido es largo */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        {/* Imagen superior, sirve como encabezado visual */}
        <Image
          source={require("../assets/Header.png")} // Cargamos la imagen del encabezado
          style={globalStyles.headerImage} // Le aplicamos los estilos definidos
          resizeMode="cover" // Ajusta la imagen para que cubra todo el espacio
        />

        {/* Contenedor del contenido central */}
        <View style={contentStyles.content}>
          
          {/* Título principal */}
          <Text style={globalStyles.title}>MENÚ PRINCIPAL</Text>

          {/* Párrafo de bienvenida, con texto en negrita usando nested <Text> */}
          <Text style={globalStyles.paragraph}>
            <Text style={globalStyles.bold}>Bienvenido/a</Text> al manual de uso de la aplicación <Text style={globalStyles.bold}>SINE Ingeniería Eléctrica</Text>. Esta aplicación está dirigida a los <Text style={globalStyles.bold}>administradores</Text> para que puedan llevar la gestión de empleados, almacenes e informes de bobinas en formato Excel.
          </Text>

          {/* Otro párrafo para indicar qué hacer */}
          <Text style={globalStyles.paragraph}>
            Selecciona una sección para obtener ayuda:
          </Text>

          {/* Botón táctil para ir a la sección de ayuda de empleados */}
          <TouchableOpacity onPress={() => navigation.navigate("AyudaEmpleados")}>
            <Text style={contentStyles.linkText}>Gestionar Empleados</Text>
          </TouchableOpacity>

          {/* Botón táctil para ir a la sección de ayuda de almacenes */}
          <TouchableOpacity onPress={() => navigation.navigate("AyudaAlmacenes")}>
            <Text style={contentStyles.linkText}>Gestionar Almacenes</Text>
          </TouchableOpacity>

          {/* Botón táctil para ir a la sección de ayuda de bobinas */}
          <TouchableOpacity onPress={() => navigation.navigate("AyudaBobinas")}>
            <Text style={contentStyles.linkText}>Informe de Bobinas</Text>
          </TouchableOpacity>
        </View>

        {/* Este View vacío con flexGrow "empuja" el footer hacia abajo si hay poco contenido */}
        <View style={{ flexGrow: 1 }} />

        {/* Imagen inferior, sirve como pie de página visual */}
        <Image
          source={require("../assets/Footer.png")} // Cargamos la imagen del footer
          style={globalStyles.footerImage} // Aplicamos estilos del footer
          resizeMode="contain" // Ajusta la imagen sin recortarla
        />
      </ScrollView>
    </View>
  );
}
