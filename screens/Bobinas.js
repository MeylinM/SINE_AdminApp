import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import styles from "../styles/bobinasStyles";
import * as ScreenOrientation from "expo-screen-orientation";
import ModalSelector from "react-native-modal-selector";
import { Ionicons } from "@expo/vector-icons";


export default function Bobinas() {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("All");

  const estados = [
    { key: "All", label: "Todos" },
    { key: "Entregado", label: "Entregado" },
    { key: "Para Devolver", label: "Para Devolver" },
    { key: "Devuelto", label: "Devuelto" },
  ];

  const bobinas = [
    {
      matricula: "32320286",
      almacen: "A-01",
      obra: "45678",
      descripcion: "Instalación de fibra óptica",
      estado: "Recibido",
      infoRecogida: {
        empleado: "Juan Pérez",
        fechaHora: "2024-11-15 10:00 AM",
      },
      infoDevolucion: { empleado: "", fechaHora: "" },
      infoConfirmacion: { empleado: "", fechaHora: "" },
      observaciones: "Verificar equipos al recibir.",
    },
    {
      matricula: "32320287",
      almacen: "A-02",
      obra: "45679",
      descripcion: "Mantenimiento de red",
      estado: "Para devolver",
      infoRecogida: { empleado: "Ana López", fechaHora: "2024-11-15 12:30 PM" },
      infoDevolucion: {
        empleado: "Pedro Martínez",
        fechaHora: "2024-11-16 2:00 PM",
      },
      infoConfirmacion: { empleado: "", fechaHora: "" },
      observaciones: "Pendiente de revisión.",
    },
    {
      matricula: "32320288",
      almacen: "A-03",
      obra: "45680",
      descripcion: "Instalación de cableado",
      estado: "Para devolver",
      infoRecogida: {
        empleado: "Carlos Gómez",
        fechaHora: "2024-11-16 09:00 AM",
      },
      infoDevolucion: {
        empleado: "Marta Ruiz",
        fechaHora: "2024-11-17 1:30 PM",
      },
      infoConfirmacion: { empleado: "", fechaHora: "" },
      observaciones: "Falta verificar componentes.",
    },
    {
      matricula: "32320289",
      almacen: "B-01",
      obra: "45681",
      descripcion: "Revisión de equipos",
      estado: "Pendiente de recogida",
      infoRecogida: { empleado: "", fechaHora: "" },
      infoDevolucion: {
        empleado: "",
        fechaHora: "",
      },
      infoConfirmacion: { empleado: "", fechaHora: "" },
      observaciones: "Esperando confirmación de disponibilidad.",
    },
    {
      matricula: "32320290",
      almacen: "C-04",
      obra: "45682",
      descripcion: "Cambio de transformador",
      estado: "Devuelto",
      infoRecogida: {
        empleado: "Elena Torres",
        fechaHora: "2024-11-18 10:45 AM",
      },
      infoDevolucion: {
        empleado: "Juan Pérez",
        fechaHora: "2024-11-19 3:15 PM",
      },
      infoConfirmacion: {
        empleado: "Sofía Herrera",
        fechaHora: "2024-11-19 4:00 PM",
      },
      observaciones: "Verificado y almacenado correctamente.",
    },
    {
      matricula: "32320291",
      almacen: "A-02",
      obra: "45683",
      descripcion: "Sustitución de panel eléctrico",
      estado: "Para devolver",
      infoRecogida: {
        empleado: "Luis Fernández",
        fechaHora: "2024-11-20 08:15 AM",
      },
      infoDevolucion: {
        empleado: "Andrea Sánchez",
        fechaHora: "2024-11-21 4:45 PM",
      },
      infoConfirmacion: { empleado: "", fechaHora: "" },
      observaciones: "Esperando inspección técnica.",
    },
    {
      matricula: "32320292",
      almacen: "D-05",
      obra: "45684",
      descripcion: "Mantenimiento de generador",
      estado: "Devuelto",
      infoRecogida: {
        empleado: "Mario Castro",
        fechaHora: "2024-11-22 11:00 AM",
      },
      infoDevolucion: {
        empleado: "Paula Ortega",
        fechaHora: "2024-11-23 5:30 PM",
      },
      infoConfirmacion: {
        empleado: "Raúl Navarro",
        fechaHora: "2024-11-23 6:00 PM",
      },
      observaciones: "Revisión completada sin incidencias.",
    },
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

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>REGISTRO DE BOBINAS</Text>
      <View style={styles.filtersContainer}>
        <TextInput style={styles.input} placeholder="Buscar por matrícula" />
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
            {bobinas.map((bobina, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.cell}>{bobina.matricula}</Text>
                <Text style={styles.cell}>{bobina.almacen}</Text>
                <Text style={styles.cell}>{bobina.descripcion}</Text>
                <Text style={styles.cell}>{bobina.estado}</Text>

                <Text style={styles.cell}>
                  {bobina.infoRecogida.empleado || "-"}
                </Text>
                <Text style={styles.cell}>
                  {bobina.infoRecogida.fechaHora || "-"}
                </Text>

                <Text style={styles.cell}>
                  {bobina.infoDevolucion.empleado || "-"}
                </Text>
                <Text style={styles.cell}>
                  {bobina.infoDevolucion.fechaHora || "-"}
                </Text>

                <Text style={styles.cell}>
                  {bobina.infoConfirmacion.empleado || "-"}
                </Text>
                <Text style={styles.cell}>
                  {bobina.infoConfirmacion.fechaHora || "-"}
                </Text>

                <Text style={styles.cell}>{bobina.observaciones}</Text>
              </View>
            ))}
          </ScrollView>
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
