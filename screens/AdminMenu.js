import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";
import styles from "../styles/adminMenuStyles";
import InfoIcon from "react-native-vector-icons/Entypo";
import * as ScreenOrientation from "expo-screen-orientation";

export default function AdminMenu() {
  const navigation = useNavigation();

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  return (
    <View style={globalStyles.container}>
      <Image
        source={require("../assets/header_menu.png")}
        style={styles.headerImage}
      />
      {/* Botón de información */}
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => navigation.navigate("IndexHelp")}
      >
        <InfoIcon name="info-with-circle" size={35} color="#000000" />
      </TouchableOpacity>

      <Text style={styles.title}>Bienvenido/a</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Empleados")}
      >
        <Text style={globalStyles.buttonText}>GESTIONAR EMPLEADOS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Almacenes")}
      >
        <Text style={globalStyles.buttonText}>GESTIONAR ALMACENES</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Bobinas")}
      >
        <Text style={globalStyles.buttonText}>INFORME DE BOBINAS</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>SINE INGENIERIA ELECTRICA</Text>
    </View>
  );
}
