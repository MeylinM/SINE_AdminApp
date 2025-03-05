import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, TouchableOpacity, Text, Alert, Modal } from "react-native";
import globalStyles from "../styles/globalStyles";
import styles from "../styles/empleadosStyles";
import Header from "../components/Header";
import { obtenerEmpleados, agregarEmpleado, desactivarEmpleado} from "../services/empleadosService";

export default function Empleados() {
  const [search, setSearch] = useState("");
  const [allEmpleados, setAllEmpleados] = useState([]); // Lista completa desde la BD
  const [empleados, setEmpleados] = useState([]); // Lista filtrada
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newEmployeeName, setNewEmployeeName] = useState("");

  // Cargar empleados al iniciar la pantalla
  useEffect(() => {
    fetchEmpleados();
  }, []);

  // Función para obtener empleados de la base de datos
  const fetchEmpleados = async () => {
    const empleadosDB = await obtenerEmpleados();
    setAllEmpleados(empleadosDB);
    setEmpleados(empleadosDB);
  };

  // Filtrar empleados en tiempo real
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

  // Seleccionar un empleado
  const handleSelect = (empleado) => {
    setSelectedEmployee(empleado.id === selectedEmployee?.id ? null : empleado);
  };

 // Desactivar empleado con confirmación
 const handleDesactivar = async () => {
  if (!selectedEmployee) return;

  Alert.alert(
    "Confirmación",
    `¿Está seguro de qye quiere eliminar a ${selectedEmployee.nombre}?`,
    [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Desactivar",
        style: "destructive",
        onPress: async () => {
          await desactivarEmpleado(selectedEmployee.id);
          await fetchEmpleados(); // Recargamos la lista desde la BD
          setSelectedEmployee(null);
        },
      },
    ]
  );
};

  // Mostrar modal para agregar un empleado
  const handleAddEmployee = () => {
    setModalVisible(true);
  };

  // Confirmar y agregar nuevo empleado en la BD
  const confirmAddEmployee = async () => {
    if (!newEmployeeName.trim()) {
      Alert.alert("Error", "El nombre no puede estar vacío.");
      return;
    }

    const newEmployee = await agregarEmpleado(newEmployeeName.trim());

    if (newEmployee) {
      await fetchEmpleados(); // Recargamos la lista desde la BD
      setNewEmployeeName("");
      setModalVisible(false);
    } else {
      Alert.alert("Error", "No se pudo agregar el empleado.");
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <TextInput
        style={globalStyles.input}
        placeholder="Filtrar por nombre"
        value={search}
        onChangeText={handleSearch}
      />

      <View style={styles.listWrapper}>
        <View style={styles.listContainer}>
          <Text style={styles.header}>EMPLEADOS</Text>
          <FlatList
            data={empleados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.item, selectedEmployee?.id === item.id ? styles.selectedItem : null]}
                onPress={() => handleSelect(item)}
              >
                <Text>{item.nombre}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={globalStyles.button} onPress={handleAddEmployee}>
          <Text style={globalStyles.buttonText}>AÑADIR NUEVO EMPLEADO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.button, selectedEmployee ? {} : styles.disabledButton]}
          onPress={handleDesactivar}
          disabled={!selectedEmployee}
        >
          <Text style={globalStyles.buttonText}>ELIMINAR EMPLEADO</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para añadir un nuevo empleado */}
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
              <TouchableOpacity style={styles.modalButton} onPress={confirmAddEmployee}>
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