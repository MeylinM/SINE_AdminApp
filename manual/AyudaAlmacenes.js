/**
 * @file AyudaAlmacenes.js
 * @description Pantalla del sistema de ayuda dedicada a la gestión de almacenes.
 * Explica cómo ver, añadir, eliminar, reactivar y modificar almacenes.
 */

import React from "react"; // Importamos React para usar JSX
import { View, Text, Image, ScrollView } from "react-native"; // Componentes básicos de la interfaz
import globalHelpStyles from "./style/global"; // Estilos compartidos con otras pantallas de ayuda
import empleadosStyles from "./style/empleados"; // Estilos específicos para esta pantalla (reutilizados de empleados)
import { useNavigation } from "@react-navigation/native"; // Hook para navegación (aunque aquí no se usa)

/**
 * Pantalla de ayuda para gestionar almacenes.
 * Proporciona instrucciones visuales y escritas para usar esta sección de la app.
 */
export default function AyudaAlmacenes() {
  const navigation = useNavigation(); // Hook para poder navegar a otras pantallas (no se utiliza en este archivo)

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        {/* Imagen superior del encabezado */}
        <Image
          source={require("../assets/Header.png")}
          style={globalHelpStyles.headerImage}
          resizeMode="cover"
        />

        {/* Contenido principal */}
        <View style={empleadosStyles.content}>

          {/* Título principal de la pantalla */}
          <Text style={globalHelpStyles.title}>
            VENTANA PARA GESTIONAR ALMACENES
          </Text>

          {/* Qué puedes hacer en esta pantalla */}
          <View style={empleadosStyles.box}>
            <Text style={empleadosStyles.boxTitle}>
              ¿Qué puedes hacer en esta ventana?
            </Text>
            <View style={globalHelpStyles.list}>
              <Text style={globalHelpStyles.listItem}>• Ver una lista de los almacenes activos</Text>
              <Text style={globalHelpStyles.listItem}>• Filtrar por nombre en tiempo real</Text>
              <Text style={globalHelpStyles.listItem}>• Añadir nuevos almacenes</Text>
              <Text style={globalHelpStyles.listItem}>• Desactivar un almacén</Text>
              <Text style={globalHelpStyles.listItem}>• Volver a activar un almacén</Text>
              <Text style={globalHelpStyles.listItem}>• Modificar el nombre de un almacén</Text>
            </View>
          </View>

          {/* Visualizar almacenes */}
          <Text style={globalHelpStyles.subtitle}>Visualizar almacenes</Text>
          <Text style={globalHelpStyles.paragraph}>
            Al entrar en esta sección, verás una lista de los almacenes registrados actualmente como activos.
          </Text>

          {/* Subapartado A - Lista visible */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>A.</Text> Todos los almacenes
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/almacenes_cargados.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Si todo funciona correctamente, se mostrarán los nombres de los almacenes en la lista.
            </Text>
          </View>

          {/* Subapartado B - Lista vacía */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>B.</Text> Lista vacía
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/almacenes_vacia.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Si la lista aparece vacía y no hay errores, significa que actualmente no hay almacenes registrados en la base de datos.
            </Text>
          </View>

          {/* Subapartado C - Error */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>C.</Text> Error de conexión
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/empleados_error.jpeg")} // Se puede cambiar por una imagen específica si la hay
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Si aparece un error como este, revisa tu conexión a internet o contacta con el soporte técnico.
            </Text>
          </View>

          {/* Añadir nuevo almacén */}
          <Text style={globalHelpStyles.subtitle}>¿Cómo añadir un almacén?</Text>
          <Text style={globalHelpStyles.paragraph}>
            Pulsa en <Text style={globalHelpStyles.bold}>AÑADIR NUEVO ALMACÉN</Text>.
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/AddAlmacen_1.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Escribe el nombre del nuevo almacén y confirma.
            </Text>
          </View>
          <Text style={globalHelpStyles.paragraph}>
            Si todo va bien, el nuevo almacén aparecerá en la lista automáticamente.
          </Text>

          {/* Almacén ya existente */}
          <Text style={globalHelpStyles.paragraph}>
            <Text style={globalHelpStyles.bold}>
              ¿Qué pasa si ya existe un almacén con ese nombre?
            </Text>
          </Text>

          {/* Ya existe - Activo */}
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/AddAlmacen_activo.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              <Text style={globalHelpStyles.bold}>• Si está activo:</Text> se mostrará una alerta para evitar duplicados.
            </Text>
          </View>

          {/* Ya existe - Inactivo */}
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/AddAlmacen_inactivo.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              <Text style={globalHelpStyles.bold}>• Si está inactivo:</Text> podrás reactivarlo con un solo clic.
            </Text>
          </View>

          {/* Modificar nombre de almacén */}
          <Text style={globalHelpStyles.subtitle}>Modificar almacenes</Text>
          <Text style={globalHelpStyles.paragraph}>
            Selecciona un almacén y pulsa en <Text style={globalHelpStyles.bold}>MODIFICAR</Text>.
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/ModificarAlmacen.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Una vez seleccionado, podrás introducir un nuevo nombre para el almacén y confirmarlo.
            </Text>
          </View>

          {/* Eliminar almacén */}
          <Text style={globalHelpStyles.subtitle}>Eliminar almacenes</Text>
          <Text style={globalHelpStyles.paragraph}>
            Selecciona un almacén y pulsa en <Text style={globalHelpStyles.bold}>ELIMINAR ALMACÉN</Text>.
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/EliminarAlmacen.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Se mostrará una alerta para confirmar la eliminación del almacén.
            </Text>
          </View>
        </View>

        {/* Imagen inferior del pie de página */}
        <Image
          source={require("../assets/Footer.png")}
          style={globalHelpStyles.footerImage}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}