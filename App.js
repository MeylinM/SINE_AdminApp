/**
 * @file App.js
 * @description Punto de entrada principal de la aplicación SINE.
 * Define la navegación entre pantallas usando React Navigation con Stack Navigator.
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pantallas principales de gestión
import AdminMenu from "./screens/AdminMenu.js";
import Empleados from "./screens/Empleados.js";
import Bobinas from "./screens/Bobinas.js";
import Almacenes from "./screens/Almacenes";

// Pantallas del sistema de ayuda (manuales)
import IndexHelp from "./manual/IndexHelp";
import AyudaEmpleados from "./manual/AyudaEmpleados";
import AyudaAlmacenes from "./manual/AyudaAlmacenes";
import AyudaBobinas from "./manual/AyudaBobinas";

// Creamos el stack de navegación (pantalla sobre pantalla)
const Stack = createStackNavigator();

export default function App() {
  return (
    // Contenedor principal de navegación (obligatorio para React Navigation)
    <NavigationContainer>

      {/* Stack Navigator define el orden y la estructura de las pantallas */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {/* Pantalla principal de la app */}
        <Stack.Screen name="AdminMenu" component={AdminMenu} />

        {/* Pantallas de gestión */}
        <Stack.Screen name="Empleados" component={Empleados} />
        <Stack.Screen name="Bobinas" component={Bobinas} />
        <Stack.Screen name="Almacenes" component={Almacenes} />

        {/* Pantallas del sistema de ayuda */}
        <Stack.Screen name="IndexHelp" component={IndexHelp} />
        <Stack.Screen name="AyudaEmpleados" component={AyudaEmpleados} />
        <Stack.Screen name="AyudaAlmacenes" component={AyudaAlmacenes} />
        <Stack.Screen name="AyudaBobinas" component={AyudaBobinas} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}