/**
 * @file AyudaBobinas.js
 * @description Pantalla de ayuda que explica cómo funciona el módulo "Informe de Bobinas".
 * Incluye secciones con imágenes y texto para mostrar al usuario cómo visualizar,
 * filtrar y exportar los datos de las bobinas.
 */

import React from "react"; // Importamos React para definir el componente
import { View, Text, Image, ScrollView } from "react-native"; // Componentes básicos de interfaz
import globalHelpStyles from "./style/global"; // Estilos comunes a todas las pantallas de ayuda
import empleadosStyles from "./style/empleados"; // Reutilizamos estilos específicos similares a empleados
import { useNavigation } from "@react-navigation/native"; // Hook de navegación (aunque aquí no se usa directamente)

export default function AyudaBobinas() {
  const navigation = useNavigation(); // Hook disponible si se quiere volver atrás o navegar

  return (
    <View style={{ flex: 1 }}>
      {/* ScrollView permite hacer scroll en caso de mucho contenido */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        {/* Imagen superior (Header visual) */}
        <Image
          source={require("../assets/Header.png")}
          style={globalHelpStyles.headerImage}
          resizeMode="cover"
        />

        {/* Contenedor principal del contenido textual e imágenes */}
        <View style={empleadosStyles.content}>

          {/* Título de la sección */}
          <Text style={globalHelpStyles.title}>
            VENTANA DE INFORME DE BOBINAS
          </Text>

          {/* Explicación general de funcionalidades */}
          <View style={empleadosStyles.box}>
            <Text style={empleadosStyles.boxTitle}>
              ¿Qué puedes hacer en esta ventana?
            </Text>
            <View style={globalHelpStyles.list}>
              <Text style={globalHelpStyles.listItem}>
                • Ver una tabla que contiene los informes de las bobinas
              </Text>
              <Text style={globalHelpStyles.listItem}>
                • Filtrar por matrícula, por el estado o por empleado
              </Text>
              <Text style={globalHelpStyles.listItem}>
                • Exportar el contenido de la tabla en una hoja de cálculo
              </Text>
            </View>
          </View>

          {/* Sección: Visualizar contenido */}
          <Text style={globalHelpStyles.subtitle}>
            Visualizar contenido de la tabla
          </Text>
          <Text style={globalHelpStyles.paragraph}>
            Al entrar en esta sección, verás una tabla que contiene el registro
            de las bobinas llevado a cabo por parte de los empleados.
          </Text>

          {/* Subapartado A: Todos los registros */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>A.</Text> Todos los registros
          </Text>
          <View style={empleadosStyles.bloqueImagenVertical}>
            <Image
              source={require("../assets/VisualizarBobinas.jpeg")}
              style={empleadosStyles.imageHorizontal}
            />
            <Text style={empleadosStyles.textoDebajo}>
              Si todo funciona correctamente, se mostrarán los nombres de los
              empleados en la lista.
            </Text>
          </View>

          {/* Subapartado B: Lista vacía */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>B.</Text> Lista vacía
          </Text>
          <View style={empleadosStyles.bloqueImagenVertical}>
            <Image
              source={require("../assets/VisualizarVacioBobina.jpeg")}
              style={empleadosStyles.imageHorizontal}
            />
            <Text style={empleadosStyles.textoDebajo}>
              Si la lista aparece vacía y no hay errores, simplemente no hay
              empleados registrados en la base de datos.
            </Text>
          </View>

          {/* Subapartado C: Error de conexión */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>C.</Text> Error de conexión
          </Text>
          <View style={empleadosStyles.bloqueImagenVertical}>
            <Image
              source={require("../assets/VisualizarErrorConexionBobinas.jpeg")}
              style={empleadosStyles.imageHorizontal}
            />
            <Text style={empleadosStyles.textoDebajo}>
              Si ves un error como este, revisa tu conexión a internet o
              contacta con soporte técnico.
            </Text>
          </View>

          {/* Sección: Exportar tabla */}
          <Text style={globalHelpStyles.subtitle}>
            Exportar contenido de la tabla
          </Text>
          <Text style={globalHelpStyles.paragraph}>
            Cuando pulses el botón{" "}
            <Text style={globalHelpStyles.bold}>EXPORTAR TABLA</Text>, se
            generará automáticamente un archivo Excel con toda la información
            actual mostrada en la tabla.
          </Text>
          <Text style={globalHelpStyles.paragraph}>
            Se abrirá una ventana emergente como la siguiente:
          </Text>
          <Image
            source={require("../assets/ExportarHojaDeCalculo.jpeg")}
            style={empleadosStyles.imageHorizontal}
          />
          <Text style={empleadosStyles.paragraph}>
            Esta ventana te permite compartir o guardar el archivo
            generado. Guarda el archivo en Drive o envíalo por correo si quieres
            acceder a él más tarde desde otro dispositivo.
          </Text>
        </View>

        {/* Imagen inferior (Footer visual) */}
        <Image
          source={require("../assets/Footer.png")}
          style={globalHelpStyles.footerImage}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}