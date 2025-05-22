/**
 * @file Empleados.js
 * @description Pantalla para la gestión de empleados.
 * Permite ver, buscar, añadir, desactivar y reactivar empleados con lógica contra duplicados.
 */

import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Alert,
  Modal,
} from "react-native";

import globalStyles from "../styles/globalStyles";
import styles from "../styles/empleadosStyles";
import Header from "../components/Header";

import {
  obtenerEmpleados,
  agregarEmpleado,
  desactivarEmpleado,
  buscarEmpleadoPorNombre,
  activarEmpleado,
} from "../services/empleadosService";

import * as ScreenOrientation from "expo-screen-orientation";

/**
 * Componente principal de la pantalla de empleados.
 * Contiene filtros, lista dinámica, y lógica para alta, baja y reactivación.
 * 
 * @returns {JSX.Element}
 */
export default function Empleados() {
  // === ESTADOS ===
  const [search, setSearch] = useState(""); // Texto para el filtro por nombre
  const [allEmpleados, setAllEmpleados] = useState([]); // Todos los empleados desde la BD
  const [empleados, setEmpleados] = useState([]); // Lista visible (filtrada)
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Empleado seleccionado
  const [modalVisible, setModalVisible] = useState(false); // Mostrar/ocultar modal
  const [newEmployeeName, setNewEmployeeName] = useState(""); // Nombre para el nuevo empleado

  // Al montar la pantalla → bloquear orientación y cargar empleados
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    fetchEmpleados();
  }, []);

  // Obtener empleados desde la base de datos
  const fetchEmpleados = async () => {
    const empleadosDB = await obtenerEmpleados();
    setAllEmpleados(empleadosDB);
    setEmpleados(empleadosDB);
  };

  // Filtro dinámico por nombre
  const handleSearch = (text) => {
    setSearch(text);
    if (text === "") {
      setEmpleados(allEmpleados);
    } else {
      const filtered = allEmpleados.filter((empleado) =>
        empleado.nombre.toLowerCase().includes(text.toLowerCase())
      );
      setEmpleados(filtered);
    }
  };

  // Selección de empleado (toggle si se pulsa 2 veces)
  const handleSelect = (empleado) => {
    setSelectedEmployee(empleado.id === selectedEmployee?.id ? null : empleado);
  };

  // Mostrar confirmación para desactivar un empleado
  const handleDesactivar = async () => {
    if (!selectedEmployee) return;

    Alert.alert(
      "Confirmación",
      `¿Está seguro de que quiere eliminar a ${selectedEmployee.nombre}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Desactivar",
          style: "destructive",
          onPress: async () => {
            await desactivarEmpleado(selectedEmployee.id);
            await fetchEmpleados();
            setSelectedEmployee(null);
          },
        },
      ]
    );
  };

  // Abrir el modal para añadir nuevo empleado
  const handleAddEmployee = () => {
    setModalVisible(true);
  };

  // Lógica para añadir un empleado (con validaciones)
  const confirmAddEmployee = async () => {
    if (!newEmployeeName.trim()) {
      Alert.alert("Error", "El nombre no puede estar vacío.");
      return;
    }

    const existente = await buscarEmpleadoPorNombre(newEmployeeName.trim());

    // Ya existe
    if (existente) {
      if (existente[0].activo === 1) {
        Alert.alert(
          "Empleado ya registrado",
          "Ya existe un empleado con ese nombre y está activo.\n\nIntroduce nombre y apellido para evitar confusión."
        );
      } else {
        Alert.alert(
          "Empleado inactivo",
          `Ya existe un empleado con ese nombre, pero está inactivo.\n\n¿Deseas reactivarlo? Esta acción solo debe usarse si el empleado se reincorpora.`,
          [
            { text: "Cancelar", style: "cancel" },
            {
              text: "Activar",
              onPress: async () => {
                const ok = await activarEmpleado(existente[0].id);
                if (ok) {
                  await fetchEmpleados();
                  setNewEmployeeName("");
                  setModalVisible(false);
                }
              },
            },
          ]
        );
      }
      return;
    }

    // No existe → agregar
    const newEmployee = await agregarEmpleado(newEmployeeName.trim());

    if (newEmployee) {
      await fetchEmpleados();
      setNewEmployeeName("");
      setModalVisible(false);
    } else {
      Alert.alert("Error", "No se pudo agregar el empleado.");
    }
  };

  // === VISTA PRINCIPAL ===
  return (
    <View style={styles.container}>
      <Header />

      {/* Búsqueda */}
      <TextInput
        style={globalStyles.input}
        placeholder="Filtrar por nombre"
        value={search}
        onChangeText={handleSearch}
      />

      {/* Lista de empleados */}
      <View style={styles.listWrapper}>
        <View style={styles.listContainer}>
          <Text style={styles.header}>EMPLEADOS</Text>
          <FlatList
            data={empleados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.item,
                  selectedEmployee?.id === item.id ? styles.selectedItem : null,
                ]}
                onPress={() => handleSelect(item)}
              >
                <Text>{item.nombre}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      {/* Botones de acción */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={handleAddEmployee}
        >
          <Text style={globalStyles.buttonText}>AÑADIR NUEVO EMPLEADO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedEmployee ? {} : styles.disabledButton,
          ]}
          onPress={handleDesactivar}
          disabled={!selectedEmployee}
        >
          <Text style={globalStyles.buttonText}>ELIMINAR EMPLEADO</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para añadir nuevo empleado */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nuevo Empleado</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Introduce el nombre"
              value={newEmployeeName}
              onChangeText={setNewEmployeeName}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={confirmAddEmployee}
              >
                <Text style={styles.buttonText}>Añadir</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}