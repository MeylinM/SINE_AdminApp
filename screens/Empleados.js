import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";

const empleados = [
  { id: "1", nombre: "Nombre 1" },
  { id: "2", nombre: "Nombre 2" },
  { id: "3", nombre: "Nombre 3" },
  { id: "4", nombre: "Nombre 4" },
  { id: "5", nombre: "Nombre 5" },
  { id: "6", nombre: "Nombre 6" },
  { id: "7", nombre: "Nombre 7" },
  { id: "8", nombre: "Nombre 8" },
  { id: "9", nombre: "Nombre X" },
];

export default function Empleados() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filtrar por nombre"
      />
      
      <View style={styles.listContainer}>
        <Text style={styles.header}>EMPLEADOS</Text>
        <FlatList
          data={empleados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.nombre}</Text>
            </View>
          )}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>AÑADIR NUEVO EMPLEADO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ELIMINAR EMPLEADO</Text>
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
  input: {
    backgroundColor: "#7EC8E3",
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  listContainer: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
    alignItems: "center",
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
