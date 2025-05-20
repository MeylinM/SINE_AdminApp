
import React from "react"; // Importamos React para poder crear componentes
import { View, Text, Image, ScrollView } from "react-native"; // Componentes básicos de React Native
import globalHelpStyles from "./style/global"; // Estilos generales del sistema de ayuda
import empleadosStyles from "./style/empleados"; // Estilos específicos para esta pantalla
import { useNavigation } from "@react-navigation/native"; // Hook para navegar entre pantallas (aunque aquí no se usa directamente)


export default function AyudaBobinas() {
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
            VENTANA DE INFORME DE BOBINAS
          </Text>

          {/* Bloque: Qué puedes hacer en esta ventana */}
          <View style={empleadosStyles.box}>
            <Text style={empleadosStyles.boxTitle}>
              ¿Qué puedes hacer en esta ventana?
            </Text>
            <View style={globalHelpStyles.list}>
              <Text style={globalHelpStyles.listItem}>• Ver una tabla que contiene los informes de las bobinas</Text>
              <Text style={globalHelpStyles.listItem}>• Filtrar por matricula, por el estado o por empleado</Text>
              <Text style={globalHelpStyles.listItem}>• Exportar el contenido de la tabla en una hoja de calculo</Text>
            </View>
          </View>

          {/* Subtítulo: Visualizar registro de bobinas */}
          <Text style={globalHelpStyles.subtitle}>Visualizar contenido de la tabla</Text>
          <Text style={globalHelpStyles.paragraph}>
            Al entrar en esta sección, verás una tabla que contiene el regsistro de las boninas llevado a cabo por parte de los empleados.
          </Text>

          {/* Subsección A: Lista con empleados */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>A.</Text> Todos los registros
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/VisualizarBobinas.jpeg")}
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