/**
 * @file Almacenes.js
 * @description Pantalla para la gestión de almacenes dentro de la app.
 * Permite añadir, modificar, eliminar, reactivar y buscar almacenes.
 * Utiliza una base de datos remota y actualiza los datos en tiempo real.
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
import globalStyles from "../styles/globalStyles"; // Estilos compartidos
import styles from "../styles/almacenesStyles"; // Estilos específicos para esta pantalla
import Header from "../components/Header"; // Encabezado común
import {
  obtenerAlmacenes,
  agregarAlmacen,
  desactivarAlmacen,
  modificarAlmacen,
  activarAlmacen,
  buscarAlmacenPorNombre,
} from "../services/almacenesService"; // Funciones que interactúan con el servidor
import * as ScreenOrientation from "expo-screen-orientation"; // Para bloquear orientación

export default function Almacenes() {
  // === ESTADOS ===
  const [search, setSearch] = useState(""); // Texto de búsqueda
  const [allAlmacenes, setAllAlmacenes] = useState([]); // Lista completa de almacenes
  const [almacenes, setAlmacenes] = useState([]); // Lista visible (filtrada)
  const [selectedAlmacen, setSelectedAlmacen] = useState(null); // Almacén seleccionado
  const [modalVisible, setModalVisible] = useState(false); // Mostrar/ocultar modal
  const [nuevoNombre, setNuevoNombre] = useState(""); // Nombre nuevo/edición
  const [modoEdicion, setModoEdicion] = useState(false); // ¿Estamos editando?

  // Al iniciar, se bloquea orientación y se cargan almacenes
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    fetchAlmacenes();
  }, []);

  // Función para cargar almacenes desde la base de datos
  const fetchAlmacenes = async () => {
    const almacenesDB = await obtenerAlmacenes();
    setAllAlmacenes(almacenesDB);
    setAlmacenes(almacenesDB);
  };

  // Filtrado en tiempo real
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

  // Seleccionar un almacén (deselecciona si ya estaba seleccionado)
  const handleSelect = (almacen) => {
    setSelectedAlmacen(almacen.id === selectedAlmacen?.id ? null : almacen);
  };

  // Abrir modal para añadir
  const handleAdd = () => {
    setModoEdicion(false);
    setNuevoNombre("");
    setModalVisible(true);
  };

  // Abrir modal para modificar
  const handleModificar = () => {
    if (!selectedAlmacen) return;
    setModoEdicion(true);
    setNuevoNombre(selectedAlmacen.nombre);
    setModalVisible(true);
  };

  // Eliminar (desactivar) un almacén
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
            await desactivarAlmacen(selectedAlmacen.id);
            await fetchAlmacenes();
            setSelectedAlmacen(null);
          },
        },
      ]
    );
  };

  // Guardar nuevo o modificar almacén
  const handleGuardar = async () => {
    const nombre = nuevoNombre.trim();

    if (!nombre) {
      Alert.alert("Error", "El nombre no puede estar vacío.");
      return;
    }

    const existente = await buscarAlmacenPorNombre(nombre);

    // === AÑADIR ===
    if (!modoEdicion) {
      if (existente) {
        if (existente[0]?.activo === 1) {
          Alert.alert(
            "Almacén ya registrado",
            "Ya existe un almacén con ese nombre y está activo."
          );
        } else {
          Alert.alert(
            "Almacén inactivo",
            "Ya existe un almacén con ese nombre, pero está inactivo.\n¿Deseas reactivarlo?",
            [
              { text: "Cancelar", style: "cancel" },
              {
                text: "Activar",
                onPress: async () => {
                  const ok = await activarAlmacen(existente[0].id);
                  if (ok) {
                    await fetchAlmacenes();
                    setNuevoNombre("");
                    setModalVisible(false);
                  }
                },
              },
            ]
          );
        }
        return;
      }

      // No existe → crear nuevo
      const nuevo = await agregarAlmacen(nombre);
      if (nuevo) {
        await fetchAlmacenes();
        setNuevoNombre("");
        setModalVisible(false);
      } else {
        Alert.alert("Error", "No se pudo agregar el almacén.");
      }
      return;
    }

    // === MODIFICAR ===
    if (modoEdicion && selectedAlmacen) {
      if (existente && existente[0]?.id !== selectedAlmacen.id) {
        Alert.alert(
          "Nombre en uso",
          "Ya existe otro almacén con ese nombre. No se puede modificar."
        );
        return;
      }

      const ok = await modificarAlmacen(selectedAlmacen.id, nombre);
      if (ok) {
        await fetchAlmacenes();
        setSelectedAlmacen(null);
        setNuevoNombre("");
        setModalVisible(false);
      } else {
        Alert.alert("Error", "No se pudo modificar el almacén.");
      }
    }

    setModoEdicion(false);
  };

  // === VISTA ===
  return (
    <View style={styles.container}>
      <Header />

      {/* Buscador */}
      <TextInput
        style={globalStyles.input}
        placeholder="Filtrar por nombre"
        value={search}
        onChangeText={handleSearch}
      />

      {/* Lista de almacenes */}
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

      {/* Botones de acción */}
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

      {/* Modal para añadir/modificar */}
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