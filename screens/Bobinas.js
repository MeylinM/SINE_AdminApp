import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import styles from "../styles/bobinasStyles";
import * as ScreenOrientation from "expo-screen-orientation";
import ModalSelector from "react-native-modal-selector";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { exportarExcel } from "../utils/ExportarExcel"; // Importamos la función
import { obtenerBobinas } from "../services/productoService";

export default function Bobinas() {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("All");
  const [matriculaBusqueda, setMatriculaBusqueda] = useState("");
  const [empleadoBusqueda, setEmpleadoBusqueda] = useState("");
  const [bobinas, setBobinas] = useState([]); // Lista de bobinas desde la API
  const [historial, setHistorial] = useState([]); // Lista de registros desde la API
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(false); // Estado para manejar errores

  const estados = [
    { key: "All", label: "Todos" },
    { key: "Recibido", label: "Recibido" },
    { key: "Para devolver", label: "Para Devolver" },
    { key: "Devuelto", label: "Devuelto" },
  ];

  useEffect(() => {
    const cambiarOrientacion = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
    };

    cambiarOrientacion();

    return () => {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };
  }, []);

  // 📌 Obtener bobinas desde la API al cargar la pantalla
  useEffect(() => {
    cargarBobinas();
  }, []);

  const cargarBobinas = async () => {
    setError(false);
    const data = await obtenerBobinas();

    if (data.length === 0) {
      setError(true);
      Alert.alert(
        "Error de conexión",
        "No se pudieron obtener los datos. Verifica tu conexión."
      );
    }

    setBobinas(data);
  };

  const filteredBobinas = bobinas.filter((bobina) => {
    const coincideEstado =
      estadoSeleccionado === "All" || bobina.estado === estadoSeleccionado;
    const coincideMatricula = bobina.matricula.includes(matriculaBusqueda);

    // Convertimos los valores a minúsculas para una búsqueda insensible a mayúsculas/minúsculas
    const textoBusqueda = empleadoBusqueda.toLowerCase();
    const coincideEmpleado =
      textoBusqueda === "" ||
      (bobina.empleado1?.toLowerCase() || "").includes(textoBusqueda) ||
      (bobina.empleado2?.toLowerCase() || "").includes(textoBusqueda) ||
      (bobina.empleado3?.toLowerCase() || "").includes(textoBusqueda);

    return coincideEstado && coincideMatricula && coincideEmpleado;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTRO DE BOBINAS</Text>
      <View style={styles.filtersContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar por matrícula"
          value={matriculaBusqueda}
          onChangeText={(text) => setMatriculaBusqueda(text)}
        />
        <View style={styles.pickerContainer}>
          <ModalSelector
            data={estados}
            initValue="Seleccionar Estado"
            onChange={(option) => setEstadoSeleccionado(option.key)}
            selectTextStyle={styles.pickerText}
          >
            <TouchableOpacity style={styles.pickerTouchable}>
              <Text style={styles.pickerText}>
                {estados.find((e) => e.key === estadoSeleccionado)?.label ||
                  "Seleccionar Estado"}
              </Text>
              <Ionicons name="chevron-down-outline" size={18} color="#333" />
            </TouchableOpacity>
          </ModalSelector>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Buscar por empleado"
          value={empleadoBusqueda}
          onChangeText={(text) => setEmpleadoBusqueda(text)}
        />
      </View>
      <ScrollView horizontal>
        <View style={styles.table}>
          {/* Encabezado principal */}
          <View style={styles.headerRow}>
          <Text style={styles.headerCell}>QR ID</Text>
            <Text style={styles.headerCell}>MATRÍCULA</Text>
            <Text style={styles.headerCell}>ALMACÉN</Text>
            <Text style={styles.headerCell}>OT</Text>
            <Text style={styles.headerCell}>DESCRIPCIÓN OBRA</Text>
            <Text style={styles.headerCell}>ESTADO</Text>

            <View style={styles.headerGroup}>
              <Text style={styles.headerCellBig}>INFORMACIÓN RECOGIDA</Text>
              <View style={styles.subHeaderRow}>
                <Text style={styles.subHeaderCell}>EMPLEADO</Text>
                <Text style={styles.subHeaderCell}>FECHA Y HORA</Text>
              </View>
            </View>

            <View style={styles.headerGroup}>
              <Text style={styles.headerCellBig}>INFORMACIÓN DEVOLUCIÓN</Text>
              <View style={styles.subHeaderRow}>
                <Text style={styles.subHeaderCell}>EMPLEADO</Text>
                <Text style={styles.subHeaderCell}>FECHA Y HORA</Text>
              </View>
            </View>

            <View style={styles.headerGroup}>
              <Text style={styles.headerCellBig}>INFORMACIÓN CONFIRMACIÓN</Text>
              <View style={styles.subHeaderRow}>
                <Text style={styles.subHeaderCell}>EMPLEADO</Text>
                <Text style={styles.subHeaderCell}>FECHA Y HORA</Text>
              </View>
            </View>

            <Text style={styles.headerCell}>OBSERVACIONES</Text>
          </View>

          {/* Renderizar las filas con datos */}
          <ScrollView style={styles.dataScroll} nestedScrollEnabled={true}>
            {filteredBobinas.map((bobina, index) => (

              <View key={index} style={styles.row}>
                <Text style={styles.cell}>{bobina.producto_id}</Text>
                <Text style={styles.cell}>{bobina.matricula}</Text>
                <Text style={styles.cell}>{bobina.nombre_almacen}</Text>
                <Text style={styles.cell}>{bobina.ot}</Text>
                <Text style={styles.cell}>{bobina.descripcion_obra}</Text>
                <Text style={styles.cell}>{bobina.estado}</Text>

                <Text style={styles.cell}>{bobina.empleado1 || "-"}</Text>
                <Text style={styles.cell}>{bobina.fecha1 || "-"}</Text>

                <Text style={styles.cell}>{bobina.empleado2 || "-"}</Text>
                <Text style={styles.cell}>{bobina.fecha2 || "-"}</Text>

                <Text style={styles.cell}>{bobina.empleado3 || "-"}</Text>
                <Text style={styles.cell}>{bobina.fecha3 || "-"}</Text>

                <Text style={styles.cell}>{bobina.observaciones}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => exportarExcel(filteredBobinas)}
        >
          <Text style={globalStyles.buttonText}>EXPORTAR TABLA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
