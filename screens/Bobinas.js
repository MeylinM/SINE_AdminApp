import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function Bobinas() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>REGISTRO DE BOBINAS</Text>
      
      <ScrollView horizontal>
        <View style={styles.table}>
          <Text style={styles.cell}>MATRÍCULA</Text>
          <Text style={styles.cell}>ALMACÉN</Text>
          <Text style={styles.cell}>DESCRIPCIÓN</Text>
          <Text style={styles.cell}>ESTADO</Text>
          <Text style={styles.cell}>EMPLEADO</Text>
          <Text style={styles.cell}>FECHA Y HORA</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>IMPRIMIR INFORME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>EXPORTAR TABLA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  table: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  cell: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  button: {
    backgroundColor: "#7EC8E3",
    padding: 15,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
