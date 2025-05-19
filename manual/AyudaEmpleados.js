import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import globalHelpStyles from "./style/global";
import empleadosStyles from "./style/empleados";
import { useNavigation } from "@react-navigation/native";

export default function AyudaEmpleados() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* HEADER */}
        <Image
          source={require("../assets/Header.png")}
          style={globalHelpStyles.headerImage}
          resizeMode="cover"
        />

        {/* CONTENIDO */}
        <View style={empleadosStyles.content}>
          {/* TÍTULO PRINCIPAL */}
          <Text style={globalHelpStyles.title}>
            VENTANA PARA GESTIONAR EMPLEADOS
          </Text>

          {/* SECCIÓN: ¿Qué puedes hacer...? */}
          <View style={empleadosStyles.box}>
            <Text style={empleadosStyles.boxTitle}>
              ¿Qué puedes hacer en esta ventana?
            </Text>
            <View style={globalHelpStyles.list}>
              <Text style={globalHelpStyles.listItem}>
                • Ver una lista de empleados activos
              </Text>
              <Text style={globalHelpStyles.listItem}>
                • Filtrar por nombre en tiempo real
              </Text>
              <Text style={globalHelpStyles.listItem}>
                • Añadir nuevos empleados
              </Text>
              <Text style={globalHelpStyles.listItem}>
                • Dar de baja a un empleado
              </Text>
              <Text style={globalHelpStyles.listItem}>
                • Re-incorporar un empleado
              </Text>
            </View>
          </View>

          {/* SECCIÓN: Visualizar empleados */}
          <Text style={globalHelpStyles.subtitle}>Visualizar empleados</Text>
          <Text style={globalHelpStyles.paragraph}>
            Al entrar en esta sección, verás una lista de empleados registrados
            actualmente como activos.
          </Text>

          {/* SUBSECCIÓN A */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>A.</Text> Todos los empleados
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/empleados_cargados.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              En caso de que existan empleados y el proceso se ejecute
              correctamente, se mostrarán los nombres de los empleados en la
              lista.
            </Text>
          </View>

          {/* SUBSECCIÓN B */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>B.</Text> Lista vacía
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/empleados_vacia.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Si la lista aparece vacía y no hay mensajes de error, significa
              que en este momento no hay empleados registrados en la base de
              datos.
            </Text>
          </View>

          {/* SUBSECCIÓN C */}
          <Text style={empleadosStyles.subheader}>
            <Text style={globalHelpStyles.bold}>C.</Text> Error de conexión
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/empleados_error.jpeg")}
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Si aparece un mensaje de error como este, puede deberse a un
              problema con el servidor o tu conexión a internet. Verifica tu red
              y vuelve a intentarlo. Si el problema persiste, contacta con el
              soporte técnico.
            </Text>
          </View>

          {/* SECCIÓN: Añadir empleados */}
          <Text style={globalHelpStyles.subtitle}>
            ¿Cómo añadir un empleado?
          </Text>
          <Text style={globalHelpStyles.paragraph}>
            Pulsa en{" "}
            <Text style={globalHelpStyles.bold}>AÑADIR NUEVO EMPLEADO.</Text>,
          </Text>
          <View style={empleadosStyles.row}>
            <Image
              source={require("../assets/A")}  
              style={empleadosStyles.image}
            />
            <Text style={empleadosStyles.text}>
              Escribe el nombre completo y confirma.
            </Text>
          </View>
          <Text style={globalHelpStyles.paragraph}>
            Si el proceso se ejecuta correctamente el empleado aparecerá en la lista
          </Text>
          <Text style={globalHelpStyles.paragraph}>
            Si ya existe un empleado con ese nombre:
          </Text>
          <View style={globalHelpStyles.list}>
            <Text style={globalHelpStyles.listItem}>
              • Si está activo: se mostrará una alerta para evitar duplicados
            </Text>
            <Text style={globalHelpStyles.listItem}>
              • Si está inactivo: podrás reactivarlo con un solo clic
            </Text>
          </View>
          
          {/* SECCIÓN: Eliminar */}
          <Text style={globalHelpStyles.subtitle}>Eliminar empleados</Text>
          <Text style={globalHelpStyles.paragraph}>
            Selecciona uno de la lista y pulsa en{" "}
            <Text style={globalHelpStyles.bold}>ELIMINAR EMPLEADO</Text>.
          </Text>

          {/* ENLACE DE VOLVER */}
          <Text
            style={empleadosStyles.back}
            onPress={() => navigation.navigate("IndexHelp")}
          >
            ⬅
          </Text>
        </View>

        {/* FOOTER */}
        <Image
          source={require("../assets/Footer.png")}
          style={globalHelpStyles.footerImage}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}
