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
import styles from "../styles/almacenesStyles";
import Header from "../components/Header";
import {
  obtenerAlmacenes,
  agregarAlmacen,
  desactivarAlmacen,
  modificarAlmacen,
} from "../services/almacenesService";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Almacenes() {
  const [search, setSearch] = useState("");
  const [allAlmacenes, setAllAlmacenes] = useState([]);
  const [almacenes, setAlmacenes] = useState([]);
  const [selectedAlmacen, setSelectedAlmacen] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    fetchAlmacenes();
  }, []);

  // Función para obtener Almacenes de la base de datos
  const fetchAlmacenes = async () => {
    const almacenesDB = await obtenerAlmacenes();
    setAllAlmacenes(almacenesDB);
    setAlmacenes(almacenesDB);
  };

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
          onPress: async () => {
            const ok = await desactivarAlmacen(selectedAlmacen.id);
            if (ok) {
              await fetchAlmacenes(); // Recarga desde el servidor
              setSelectedAlmacen(null);
            }
          },
        },
      ]
    );
  };

  const handleGuardar = async () => {
    if (!nuevoNombre.trim()) {
      Alert.alert("Error", "El nombre no puede estar vacío.");
      return;
    }

    if (modoEdicion && selectedAlmacen) {
      const ok = await modificarAlmacen(selectedAlmacen.id, nuevoNombre.trim());
      if (ok) {
        await fetchAlmacenes();
        setSelectedAlmacen(null);
      } else {
        return;
      }
    } else {
      // Añadir con API
      const nuevo = await agregarAlmacen(nuevoNombre.trim());

      if (nuevo) {
        const actualizados = [...allAlmacenes, nuevo];
        setAllAlmacenes(actualizados);
        setAlmacenes(actualizados);
      } else {
        return; // si falla, no cerramos modal
      }
    }

    setNuevoNombre("");
    setModalVisible(false);
    setModoEdicion(false);
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

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
        <TouchableOpacity 
          style={globalStyles.button} 
          onPress={handleAdd}>
          <Text 
          style={globalStyles.buttonText}>AÑADIR NUEVO ALMACÉN</Text>
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
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleGuardar}
              >
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
