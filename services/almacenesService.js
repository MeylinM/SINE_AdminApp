const API_URL = "https://sineserver-production.up.railway.app/almacen"; // Reemplázalo con la URL real

// Obtener todos los Almacenes desde la base de datos
export const obtenerAlmacenes = async () => {
  try {
    console.log("Obteniendo Almacenes... haciendo petición a:", API_URL);
    const response = await fetch(API_URL+"/activos");
    if (!response.ok)
      throw new Error(
        "Error en la respuesta del servidor. Error HTTP:  + ${response.status}"
      );

    const data = await response.json();
    console.log("Datos obtenidos:", data);

    return data;
  } catch (error) {
    console.error("Error obteniendo Almacenes:", error);
    Alert.alert(
      "Error de conexion",
      "No se ha podido conectar con el servidor. Verifica tu conexion e intentalo de nuevo."
    );
    return []; // Retornamos un array vacío para evitar fallos en la UI
  }
};

// Agregar un nuevo Almacen a la base de datos
export const agregarAlmacen = async (nombre) => {
  try {
    console.log("Agregando Almacen: ${nombre}");
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    if (!response.ok)
      throw new Error(
        "Error al añadir Almacen. Error HTTP: ${response.status}"
      );
    const AlmacenNuevo = await response.json();
    console.log("Almacen agregado:", AlmacenNuevo);

    return AlmacenNuevo;
  } catch (error) {
    console.error("Error agregando almacen:", error);
    Alert.alert("Error", "No se pudo agregar el almacen. Inténtalo de nuevo.");
    return null; // Retornamos null si hay error
  }
};

//Modificar un almacen
export const modificarAlmacen = async (id, nombre) => {
    try {
        console.log(`Haciendo PUT a: ${API_URL}/${id}`);
        console.log(`Modificando el almacen con ID: ${id}`);
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre }),
      });
  
      if (!response.ok)
        throw new Error(`Error HTTP: ${response.status}`);
  
      console.log("Almacén modificado");
      return true;
    } catch (error) {
      console.error("Error al modificar almacén:", error);
      Alert.alert("Error", "No se pudo modificar el almacén.");
      return false;
    }
  };

// Eliminar un almacen de la base de datos
export const desactivarAlmacen = async (id) => {
  try {
    console.log(`Desactivando empleado con ID: ${id}`);
    const response = await fetch(`${API_URL}/activo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activo: false }), // Marcamos como inactivo
    });

    if (!response.ok)
      throw new Error(
        "Error al desactivar almacen. Error HTTP: ${response.status}"
      );
    console.log("Almacen desactivado con éxito.");
  } catch (error) {
    console.error("Error desactivando almacen:", error);
    Alert.alert(
      "Error",
      "No se pudo desactivar el almacen. Inténtalo de nuevo." 

    );
  }
};
