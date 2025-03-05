import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles/globalStyles";
import styles from "../styles/bobinasStyles";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Bobinas() {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("All");

  useEffect(() => {
    const cambiarOrientacion = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    };
    cambiarOrientacion();

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTRO DE BOBINAS</Text>

      <View style={styles.filtersContainer}>
        <TextInput style={styles.input} placeholder="Buscar por matrícula" />
        <View style={styles.pickerContainer}>
          <Picker selectedValue={estadoSeleccionado} onValueChange={(itemValue) => setEstadoSeleccionado(itemValue)}>
            <Picker.Item label="Todos" value="All" />
            <Picker.Item label="Entregado" value="Entregado" />
            <Picker.Item label="Para Devolver" value="Para Devolver" />
            <Picker.Item label="Devuelto" value="Devuelto" />
          </Picker>
        </View>
        <TextInput style={styles.input} placeholder="Buscar por empleado" />
      </View>

      <ScrollView horizontal>
        <View style={styles.table}>
          {/* Encabezado principal */}
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>MATRÍCULA</Text>
            <Text style={styles.headerCell}>ALMACÉN</Text>
            <Text style={styles.headerCell}>DESCRIPCIÓN OBRA</Text>
            <Text style={styles.headerCell}>ESTADO</Text>

            {/* Información Recogida */}
            <View style={styles.headerGroup}>
              <Text style={styles.headerCellBig}>INFORMACIÓN RECOGIDA</Text>
              <View style={styles.subHeaderRow}>
                <Text style={styles.subHeaderCell}>EMPLEADO</Text>
                <Text style={styles.subHeaderCell}>FECHA Y HORA</Text>
              </View>
            </View>

            {/* Información Devolución */}
            <View style={styles.headerGroup}>
              <Text style={styles.headerCellBig}>INFORMACIÓN DEVOLUCIÓN</Text>
              <View style={styles.subHeaderRow}>
                <Text style={styles.subHeaderCell}>EMPLEADO</Text>
                <Text style={styles.subHeaderCell}>FECHA Y HORA</Text>
              </View>
            </View>

            {/* Información Confirmación */}
            <View style={styles.headerGroup}>
              <Text style={styles.headerCellBig}>INFORMACIÓN CONFIRMACIÓN</Text>
              <View style={styles.subHeaderRow}>
                <Text style={styles.subHeaderCell}>EMPLEADO</Text>
                <Text style={styles.subHeaderCell}>FECHA Y HORA</Text>
              </View>
            </View>

            <Text style={styles.headerCell}>OBSERVACIONES</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={globalStyles.buttonText}>EXPORTAR TABLA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={globalStyles.buttonText}>IMPRIMIR INFORME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}