import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import styles from "../styles/empleadosStyles";

const empleados = [
  { id: "1", nombre: "Nombre 1" },
  { id: "2", nombre: "Nombre 2" },
  { id: "3", nombre: "Nombre 3" },
];

export default function Empleados() {
  return (
    <View style={globalStyles.container}>
      <TextInput style={globalStyles.input} placeholder="Filtrar por nombre" />
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
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>AÑADIR NUEVO EMPLEADO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>ELIMINAR EMPLEADO</Text>
      </TouchableOpacity>
    </View>
  );
}