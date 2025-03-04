import React, { useState } from "react"; // Importamos React y el hook useState
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Alert,
  Modal,
} from "react-native";
import globalStyles from "../styles/globalStyles"; // Importamos los estilos globales
import styles from "../styles/empleadosStyles"; // Importamos los estilos específicos de esta pantalla
import Header from "../components/Header"; // Importamos el Header de la app

// Lista inicial de empleados (creamos 30 empleados con nombres "Nombre 1", "Nombre 2", etc.)
const empleadosIniciales = Array.from({ length: 30 }, (_, i) => ({
  id: `${i + 1}`,
  nombre: `Nombre ${i + 1}`,
}));

export default function Empleados() {
  // Estado para manejar el texto del filtro de búsqueda
  const [search, setSearch] = useState("");

  // Estado que almacena TODOS los empleados (original y actualizado)
  const [allEmpleados, setAllEmpleados] = useState(empleadosIniciales);

  // Estado que almacena SOLO los empleados que se están mostrando (según el filtro)
  const [empleados, setEmpleados] = useState(empleadosIniciales);

  // Estado para manejar el empleado seleccionado (para eliminarlo)
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Estado para manejar si el modal de añadir empleado está visible
  const [modalVisible, setModalVisible] = useState(false);

  // Estado para almacenar el nombre del nuevo empleado ingresado en el modal
  const [newEmployeeName, setNewEmployeeName] = useState("");

  //  Función para filtrar empleados en tiempo real (cuando el usuario escribe en el buscador)
  const handleSearch = (text) => {
    setSearch(text); // Guardamos el texto ingresado en el estado

    if (text === "") {
      setEmpleados(allEmpleados); // Si el filtro está vacío, mostramos todos los empleados
    } else {
      const filtered = allEmpleados.filter(
        (empleado) => empleado.nombre.toLowerCase().includes(text.toLowerCase()) // Buscamos coincidencias sin importar mayúsculas/minúsculas
      );
      setEmpleados(filtered); // Actualizamos la lista mostrada con los empleados filtrados
    }
  };

  //  Función para seleccionar un empleado al hacer clic en él
  const handleSelect = (empleado) => {
    // Si el usuario hace clic en un empleado ya seleccionado, lo deseleccionamos
    // Si hace clic en otro, lo seleccionamos
    setSelectedEmployee(empleado.id === selectedEmployee?.id ? null : empleado);
  };

  //  Función para eliminar un empleado con una alerta de confirmación
  const handleDelete = () => {
    if (!selectedEmployee) return; // Si no hay un empleado seleccionado, no hacemos nada

    Alert.alert(
      "Confirmación", // Título de la alerta
      `¿Estás seguro de que deseas eliminar a ${selectedEmployee.nombre}?`, // Mensaje de la alerta
      [
        { text: "Cancelar", style: "cancel" }, // Opción para cancelar la eliminación
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => {
            // Filtramos la lista para quitar el empleado seleccionado
            const updatedList = allEmpleados.filter(
              (emp) => emp.id !== selectedEmployee.id
            );
            setAllEmpleados(updatedList); // Actualizamos la lista completa
            setEmpleados(updatedList); // También actualizamos la lista mostrada
            setSelectedEmployee(null); // Deseleccionamos el empleado
          },
        },
      ]
    );
  };

  //  Función que se ejecuta al presionar el botón "AÑADIR NUEVO EMPLEADO"
  const handleAddEmployee = () => {
    setModalVisible(true); // Mostramos el modal para ingresar el nombre del nuevo empleado
  };

  //  Función que añade el nuevo empleado a la lista
  const confirmAddEmployee = () => {
    if (!newEmployeeName.trim()) {
      Alert.alert("Error", "El nombre no puede estar vacío."); // Mostramos un error si el nombre está vacío
      return;
    }

    // Buscamos el ID más alto en la lista y le sumamos 1 para el nuevo empleado
    const maxId =
      allEmpleados.length > 0
        ? Math.max(...allEmpleados.map((e) => parseInt(e.id)))
        : 0;
    const newEmployee = {
      id: `${maxId + 1}`, // Generamos un ID único
      nombre: newEmployeeName.trim(), // Guardamos el nombre sin espacios extra
    };

    const updatedList = [...allEmpleados, newEmployee]; // Agregamos el nuevo empleado a la lista

    setAllEmpleados(updatedList); // Actualizamos la lista completa
    setEmpleados(updatedList); // También actualizamos la lista mostrada para que el nuevo empleado aparezca
    setNewEmployeeName(""); // Limpiamos el input del modal
    setModalVisible(false); // Cerramos el modal
  };

  return (
    <View style={styles.container}>
      {/* Header fijo arriba */}
      <Header />

      {/* Barra de búsqueda */}
      <TextInput
        style={globalStyles.input}
        placeholder="Filtrar por nombre"
        value={search}
        onChangeText={handleSearch}
      />

      {/* Contenedor de la lista de empleados con scroll */}
      <View style={styles.listWrapper}>
        <View style={styles.listContainer}>
          <Text style={styles.header}>EMPLEADOS</Text>
          <FlatList
            data={empleados} // Usamos la lista filtrada
            keyExtractor={(item) => item.id} // Usamos el ID como clave única
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.item,
                  selectedEmployee?.id === item.id ? styles.selectedItem : null, // Resaltamos si está seleccionado
                ]}
                onPress={() => handleSelect(item)}
              >
                <Text>{item.nombre}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      {/* Botones Fijos Abajo */}
      <View style={styles.buttonsContainer}>
        {/* Botón para añadir un nuevo empleado */}
        <TouchableOpacity
          style={globalStyles.button}
          onPress={handleAddEmployee}
        >
          <Text style={globalStyles.buttonText}>AÑADIR NUEVO EMPLEADO</Text>
        </TouchableOpacity>

        {/* Botón de eliminar (deshabilitado si no hay un empleado seleccionado) */}
        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedEmployee ? {} : styles.disabledButton,
          ]}
          onPress={handleDelete}
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