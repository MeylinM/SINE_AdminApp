import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AdminMenu() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Bienvenido/a</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Empleados")}
      >
        <Text style={styles.buttonText}>GESTIONAR EMPLEADOS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Bobinas")}
      >
        <Text style={styles.buttonText}>INFORME DE BOBINAS</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>SINE INGENIERIA ELECTRICA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4a4a4a",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#0096FF",
    padding: 15,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    fontSize: 14,
    color: "#0096FF",
  },
});
