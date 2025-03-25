import React, { useState } from "react";
import {View,TextInput,FlatList,TouchableOpacity,Text,Alert,Modal,} from "react-native";
import globalStyles from "../styles/globalStyles";
import styles from "../styles/empleadosStyles";
import Header from "../components/Header";

const almacenesIniciales = [
  { id: "1", nombre: "A-01" },
  { id: "2", nombre: "B-02" },
  { id: "3", nombre: "C-03" },
];

export default function Almacenes() {
  const [search, setSearch] = useState("");
  const [allAlmacenes, setAllAlmacenes] = useState(almacenesIniciales);
  const [almacenes, setAlmacenes] = useState(almacenesIniciales);
  const [selectedAlmacen, setSelectedAlmacen] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);

  const handleSearch = (text) => {
    setSearch(text);
    if (text === "") {
      setAlmacenes(allAlmacenes);
    } else {
      const filtrados = allAlmacenes.filter((a) =>
        a.nombre.toLowerCase().includes(text.toLowerCase())
      );
      setAlmacenes(filtrados);
    }
  };

  const handleSelect = (almacen) => {
    setSelectedAlmacen(almacen.id === selectedAlmacen?.id ? null : almacen);
  };

  const handleAdd = () => {
    setModoEdicion(false);
    setNuevoNombre("");
    setModalVisible(true);
  };

  const handleModificar = () => {
    if (!selectedAlmacen) return;
    setModoEdicion(true);
    setNuevoNombre(selectedAlmacen.nombre);
    setModalVisible(true);
  };

  const handleEliminar = () => {
    if (!selectedAlmacen) return;

    Alert.alert(
      "Confirmación",
      `¿Deseas eliminar el almacén "${selectedAlmacen.nombre}"?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => {
            const actualizados = allAlmacenes.filter(
              (a) => a.id !== selectedAlmacen.id
            );
            setAllAlmacenes(actualizados);
            setAlmacenes(actualizados);
            setSelectedAlmacen(null);
          },
        },
      ]
    );
  };

  const handleGuardar = () => {
    if (!nuevoNombre.trim()) {
      Alert.alert("Error", "El nombre no puede estar vacío.");
      return;
    }

    if (modoEdicion && selectedAlmacen) {
      // Modificar
      const actualizados = allAlmacenes.map((a) =>
        a.id === selectedAlmacen.id
          ? { ...a, nombre: nuevoNombre.trim() }
          : a
      );
      setAllAlmacenes(actualizados);
      setAlmacenes(actualizados);
      setSelectedAlmacen(null);
    } else {
      // Añadir
      const maxId =
        allAlmacenes.length > 0
          ? Math.max(...allAlmacenes.map((a) => parseInt(a.id)))
          : 0;

      const nuevo = {
        id: `${maxId + 1}`,
        nombre: nuevoNombre.trim(),
      };

      const actualizados = [...allAlmacenes, nuevo];
      setAllAlmacenes(actualizados);
      setAlmacenes(actualizados);
    }

    setNuevoNombre("");
    setModalVisible(false);
    setModoEdicion(false);
  };

  return (
    <View style={globalStyles.container}>
      <Header />

      <TextInput
        style={globalStyles.input}
        placeholder="Filtrar por nombre"
        value={search}
        onChangeText={handleSearch}
      />

      <View style={styles.listWrapper}>
        <View style={styles.listContainer}>
          <Text style={styles.header}>ALMACENES</Text>
          <FlatList
            data={almacenes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.item,
                  selectedAlmacen?.id === item.id ? styles.selectedItem : null,
                ]}
                onPress={() => handleSelect(item)}
              >
                <Text>{item.nombre}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={globalStyles.button} onPress={handleAdd}>
          <Text style={globalStyles.buttonText}>AÑADIR NUEVO ALMACÉN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedAlmacen ? {} : styles.disabledButton,
          ]}
          onPress={handleModificar}
          disabled={!selectedAlmacen}
        >
          <Text style={globalStyles.buttonText}>MODIFICAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedAlmacen ? {} : styles.disabledButton,
          ]}
          onPress={handleEliminar}
          disabled={!selectedAlmacen}
        >
          <Text style={globalStyles.buttonText}>ELIMINAR ALMACÉN</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {modoEdicion ? "Modificar Almacén" : "Nuevo Almacén"}
            </Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Introduce el nombre"
              value={nuevoNombre}
              onChangeText={setNuevoNombre}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={handleGuardar}>
                <Text style={styles.buttonText}>
                  {modoEdicion ? "Guardar" : "Añadir"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setModalVisible(false);
                  setNuevoNombre("");
                  setModoEdicion(false);
                }}
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