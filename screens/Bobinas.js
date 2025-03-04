import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";
import styles from "../styles/bobinasStyles";

export default function Bobinas() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>REGISTRO DE BOBINAS</Text>
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
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>IMPRIMIR INFORME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>EXPORTAR TABLA</Text>
      </TouchableOpacity>
    </View>
  );
}