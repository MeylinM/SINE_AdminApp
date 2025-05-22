/**
 * @file AyudaEmpleados.js
 * @description Pantalla del sistema de ayuda dedicada a la gestión de empleados.
 * Explica qué se puede hacer en la sección de empleados, muestra capturas
 * y detalla cómo añadir, eliminar o gestionar errores.
 */

import React from "react"; // Importamos React para poder crear componentes
import { View, Text, Image, ScrollView } from "react-native"; // Componentes básicos de React Native
import globalHelpStyles from "./style/global"; // Estilos generales del sistema de ayuda
import empleadosStyles from "./style/empleados"; // Estilos específicos para esta pantalla
import { useNavigation } from "@react-navigation/native"; // Hook para navegar entre pantallas (aunque aquí no se usa directamente)

/**
 * Pantalla de ayuda para la gestión de empleados.
 * Muestra qué opciones hay, cómo añadir/eliminar empleados
 * y qué errores pueden aparecer.
 */
export default function AyudaEmpleados() {
  const navigation = useNavigation(); // Hook para poder usar navegación (aunque en esta pantalla no se usa)

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        {/* Imagen del encabezado (header) */}
        <Image
          source={require("../assets/Header.png")}
          style={globalHelpStyles.headerImage}
          resizeMode="cover"
        />

        {/* Contenedor principal del contenido de ayuda */}
        <View style={empleadosStyles.content}>
          
          {/* Título principal */}
          <Text style={globalHelpStyles.title}>
            VENTANA PARA GESTIONAR EMPLEADOS
          </Text>

          {/* Bloque: Qué puedes hacer en esta ventana */}
          <View style={empleadosStyles.box}>
            <Text style={empleadosStyles.boxTitle}>
              ¿Qué puedes hacer en esta ventana?
            </Text>
            <View style={globalHelpStyles.list}>
              <Text style={globalHelpStyles.listItem}>• Ver una lista de empleados activos</Text>
              <Text style={globalHelpStyles.listItem}>• Filtrar por nombre en tiempo real</Text>
              <Text style={globalHelpStyles.listItem}>• Añadir nuevos empleados</Text>
              <Text style={globalHelpStyles.listItem}>• Dar de baja a un empleado</Text>
              <Text style={globalHelpStyles.listItem}>• Re-incorporar un empleado</Text>
            </View>
          </View>

          {/* Subtítulo: Visualizar empleados */}
          <Text style={globalHelpStyles.subtitle}>Visualizar empleados</Text>
          <Text style={globalHelpStyles.paragraph}>
            Al entrar en esta sección, verás una lista de empleados registrados actualmente como activos.
          </Text>

          {/* Subsección A: Lista con empleados */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>A.</Text> Todos los empleados
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/empleados_cargados.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Si todo funciona correctamente, se mostrarán los nombres de los empleados en la lista.
            </Text>
          </View>

          {/* Subsección B: Lista vacía */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>B.</Text> Lista vacía
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/empleados_vacia.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Si la lista aparece vacía y no hay errores, simplemente no hay empleados registrados en la base de datos.
            </Text>
          </View>

          {/* Subsección C: Error */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>C.</Text> Error de conexión
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/empleados_error.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Si ves un error como este, revisa tu conexión a internet o contacta con soporte técnico.
            </Text>
          </View>

          {/* Cómo añadir un nuevo empleado */}
          <Text style={globalHelpStyles.subtitle}>¿Cómo añadir un empleado?</Text>
          <Text style={globalHelpStyles.paragraph}>
            Pulsa en <Text style={globalHelpStyles.bold}>AÑADIR NUEVO EMPLEADO</Text>.
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/AddEmployee_1.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Escribe el nombre completo del nuevo empleado y confirma.
            </Text>
          </View>

          <Text style={globalHelpStyles.paragraph}>
            Si todo va bien, aparecerá en la lista automáticamente.
          </Text>
          <Text style={globalHelpStyles.paragraph}>
            <Text style={globalHelpStyles.bold}>¿Qué pasa si ya existe un empleado con ese nombre?</Text>
          </Text>

          {/* Ya existe - Activo */}
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/AddEmployee_2.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              <Text style={globalHelpStyles.bold}>• Si está activo:</Text> Se mostrará una alerta para evitar duplicados.
            </Text>
          </View>

          {/* Ya existe - Inactivo */}
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/AddEmployee_3.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
               <Text style={globalHelpStyles.bold}>• Si está inactivo:</Text> Podrás reactivarlo con un solo clic.
            </Text>
          </View>

          {/* Cómo eliminar empleados */}
          <Text style={globalHelpStyles.subtitle}>Eliminar empleados</Text>
          <Text style={globalHelpStyles.paragraph}>
            Selecciona un empleado y pulsa en <Text style={globalHelpStyles.bold}>ELIMINAR EMPLEADO</Text>.
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/DeleteEmployee_1.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Aparecerá una alerta para confirmar la eliminación.
            </Text>
          </View>
        </View>

        {/* Imagen del pie de página (footer) */}
        <Image
          source={require("../assets/Footer.png")}
          style={globalHelpStyles.footerImage}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}