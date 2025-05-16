// AyudaIndex.js
import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "./style/global";
import contentStyles from "./style/index";

export default function AyudaIndex() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          source={require("../assets/Header.png")}
          style={globalStyles.headerImage}
          resizeMode="cover"
        />

        <View style={contentStyles.content}>
          <Text style={globalStyles.title}>MENÚ PRINCIPAL</Text>

          <Text style={globalStyles.paragraph}>
            <Text style={globalStyles.bold}>Bienvenido/a</Text> al manual de uso de la aplicación <Text style={globalStyles.bold}>SINE Ingeniería Eléctrica</Text>. Esta aplicación está dirigida a los <Text style={globalStyles.bold}>administradores</Text> para que puedan llevar la gestión de empleados, almacenes e informes de bobinas en formato Excel.
          </Text>

          <Text style={globalStyles.paragraph}>
            Selecciona una sección para obtener ayuda:
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("AyudaEmpleados")}>
            <Text style={contentStyles.linkText}>Gestionar Empleados</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("AyudaAlmacenes")}>
            <Text style={contentStyles.linkText}>Gestionar Almacenes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("AyudaBobinas")}>
            <Text style={contentStyles.linkText}>Informe de Bobinas</Text>
          </TouchableOpacity>
        </View>

        {/* Espacio flexible para empujar el footer abajo si el contenido es corto */}
        <View style={{ flexGrow: 1 }} />

        <Image
          source={require("../assets/Footer.png")}
          style={globalStyles.footerImage}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}
