import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AdminMenu from "./screens/AdminMenu.js";
import Empleados from "./screens/Empleados.js";
import Bobinas from "./screens/Bobinas.js"; 
import Almacenes from "./screens/Almacenes";
import IndexHelp from "./manual/IndexHelp";
import AyudaEmpleados from "./manual/AyudaEmpleados";
import AyudaAlmacenes from "./manual/AyudaAlmacenes";
import AyudaBobinas from "./manual/AyudaBobinas";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Screen name="AdminMenu" component={AdminMenu} />
        <Stack.Screen name="Empleados" component={Empleados} />
        <Stack.Screen name="Bobinas" component={Bobinas} />
        <Stack.Screen name="Almacenes" component={Almacenes} />
        <Stack.Screen name="IndexHelp" component={IndexHelp} />
        <Stack.Screen name="AyudaEmpleados" component={AyudaEmpleados} />
        <Stack.Screen name="AyudaAlmacenes" component={AyudaAlmacenes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}