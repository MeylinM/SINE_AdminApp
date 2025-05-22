/**
 * @file Bobinas.js
 * @description Pantalla de registro de bobinas con filtros por estado, matrícula y empleado.
 * Muestra los datos en formato tabla horizontal y permite exportarlos a Excel.
 */

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
  StatusBar,
} from "react-native";

import globalStyles from "../styles/globalStyles"; // Estilos generales
import styles from "../styles/bobinasStyles"; // Estilos específicos para esta pantalla
import * as ScreenOrientation from "expo-screen-orientation"; // Control de orientación
import ModalSelector from "react-native-modal-selector"; // Selector de estado
import { Ionicons } from "@expo/vector-icons"; // Iconos para UI
import { exportarExcel } from "../utils/ExportarExcel"; // Utilidad para exportar la tabla
import { obtenerBobinas } from "../services/productoService"; // Servicio para obtener datos

/**
 * Componente principal para ver y exportar el registro de bobinas.
 * Incluye filtros, vista horizontal en tabla, y exportación a Excel.
 * 
 * @returns {JSX.Element} Pantalla completa del módulo de bobinas.
 */
export default function Bobinas() {
  // === ESTADOS ===
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("All");
  const [matriculaBusqueda, setMatriculaBusqueda] = useState("");
  const [empleadoBusqueda, setEmpleadoBusqueda] = useState("");
  const [bobinas, setBobinas] = useState([]); // Lista completa de bobinas
  const [historial, setHistorial] = useState([]); // (Actualmente no usado)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Opciones de estados para el selector
  const estados = [
    { key: "All", label: "Todos" },
    { key: "Recibido", label: "Recibido" },
    { key: "Para devolver", label: "Para Devolver" },
    { key: "Devuelto", label: "Devuelto" },
  ];

  // Bloquear orientación a horizontal al entrar, y devolver a vertical al salir
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

  // Al cargar la pantalla, obtener bobinas desde la API
  useEffect(() => {
    cargarBobinas();
  }, []);

  // Función que llama al servicio y guarda las bobinas
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

  // Filtro de bobinas según estado, matrícula y empleado
  const filteredBobinas = bobinas.filter((bobina) => {
    const coincideEstado =
      estadoSeleccionado === "All" || bobina.estado === estadoSeleccionado;
    const coincideMatricula = bobina.matricula.includes(matriculaBusqueda);

    const textoBusqueda = empleadoBusqueda.toLowerCase();
    const coincideEmpleado =
      textoBusqueda === "" ||
      (bobina.empleado1?.toLowerCase() || "").includes(textoBusqueda) ||
      (bobina.empleado2?.toLowerCase() || "").includes(textoBusqueda) ||
      (bobina.empleado3?.toLowerCase() || "").includes(textoBusqueda);

    return coincideEstado && coincideMatricula && coincideEmpleado;
  });

  // === VISTA ===
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTRO DE BOBINAS</Text>

      {/* FILTROS */}
      <View style={styles.filtersContainer}>
        {/* Buscar por matrícula */}
        <TextInput
          style={styles.input}
          placeholder="Buscar por matrícula"
          value={matriculaBusqueda}
          onChangeText={(text) => setMatriculaBusqueda(text)}
        />

        {/* Selector de estado */}
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

        {/* Buscar por empleado */}
        <TextInput
          style={styles.input}
          placeholder="Buscar por empleado"
          value={empleadoBusqueda}
          onChangeText={(text) => setEmpleadoBusqueda(text)}
        />
      </View>

      {/* TABLA DE RESULTADOS */}
      <ScrollView horizontal>
        <View style={styles.table}>

          {/* Encabezado principal de la tabla */}
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>QR ID</Text>
            <Text style={styles.headerCell}>MATRÍCULA</Text>
            <Text style={styles.headerCell}>ALMACÉN</Text>
            <Text style={styles.headerCell}>OT</Text>
            <Text style={styles.headerCell}>DESCRIPCIÓN OBRA</Text>
            <Text style={styles.headerCell}>ESTADO</Text>

            {/* Subgrupo: Información recogida */}
            <View style={styles.headerGroup}>
              <Text style={styles.headerCellBig}>INFORMACIÓN RECOGIDA</Text>
              <View style={styles.subHeaderRow}>
                <Text style={styles.subHeaderCell}>EMPLEADO</Text>
                <Text style={styles.subHeaderCell}>FECHA Y HORA</Text>
              </View>
            </View>

            {/* Subgrupo: Para devolver */}
            <View style={styles.headerGroup}>
              <Text style={styles.headerCellBig}>INFORMACIÓN DEVOLUCIÓN</Text>
              <View style={styles.subHeaderRow}>
                <Text style={styles.subHeaderCell}>EMPLEADO</Text>
                <Text style={styles.subHeaderCell}>FECHA Y HORA</Text>
              </View>
            </View>

            {/* Subgrupo: Confirmación */}
            <View style={styles.headerGroup}>
              <Text style={styles.headerCellBig}>INFORMACIÓN CONFIRMACIÓN</Text>
              <View style={styles.subHeaderRow}>
                <Text style={styles.subHeaderCell}>EMPLEADO</Text>
                <Text style={styles.subHeaderCell}>FECHA Y HORA</Text>
              </View>
            </View>

            <Text style={styles.headerCell}>OBSERVACIONES</Text>
          </View>

          {/* FILAS DE DATOS */}
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

      {/* BOTÓN PARA EXPORTAR A EXCEL */}
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