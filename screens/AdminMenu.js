import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";
import styles from "../styles/adminMenuStyles";

export default function AdminMenu() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={globalStyles.title}>Bienvenido/a</Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate("Empleados")}
      >
        <Text style={globalStyles.buttonText}>GESTIONAR EMPLEADOS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate("Bobinas")}
      >
        <Text style={globalStyles.buttonText}>INFORME DE BOBINAS</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>SINE INGENIERIA ELECTRICA</Text>
    </View>
  );
}
