/**
 * @file exportarExcel.js
 * @description Exporta una lista filtrada de bobinas en formato Excel (.xlsx)
 * utilizando las librerías XLSX, expo-file-system y expo-sharing.
 */

import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import XLSX from "xlsx";

/**
 * Exporta una tabla de bobinas como archivo Excel y lo ofrece para compartir.
 * @param {Array<Object>} filteredBobinas - Lista de objetos bobina ya filtrados.
 */
export const exportarExcel = async (filteredBobinas) => {
  try {
    // ✅ Verifica si hay datos para exportar
    if (filteredBobinas.length === 0) {
      alert("No hay datos para exportar.");
      return;
    }

    // 1️⃣ Transformamos los datos de bobinas a un formato legible para Excel
    const datos = filteredBobinas.map((bobina) => ({
      Matrícula: bobina.matricula,
      Almacén: bobina.nombre_almacen,
      OT: bobina.ot,
      Descripción: bobina.descripcion_obra,
      Estado: bobina.estado,
      "Recogido por": bobina.empleado1 || "-",
      "Fecha Recogida": bobina.fecha1 || "-",
      "Devuelto por": bobina.empleado2 || "-",
      "Fecha Devolución": bobina.fecha2 || "-",
      "Confirmado por": bobina.empleado3 || "-",
      "Fecha Confirmación": bobina.fecha3 || "-",
      Observaciones: bobina.observaciones,
    }));

    // 2️⃣ Creamos un nuevo libro de Excel
    const wb = XLSX.utils.book_new();

    // 3️⃣ Convertimos los datos a una hoja (worksheet)
    const ws = XLSX.utils.json_to_sheet(datos);

    // 4️⃣ Aseguramos que la hoja tenga un rango definido (!ref), si no lo tiene
    if (!ws["!ref"]) {
      const numRows = datos.length;
      const numCols = Object.keys(datos[0]).length;
      ws["!ref"] = XLSX.utils.encode_range({
        s: { r: 0, c: 0 },
        e: { r: numRows, c: numCols - 1 },
      });
    }

    // 5️⃣ Añadimos la hoja al libro
    XLSX.utils.book_append_sheet(wb, ws, "Informe Bobinas");

    // 6️⃣ Convertimos el libro a formato base64 (para guardarlo en el dispositivo)
    const wbout = XLSX.write(wb, { type: "base64", bookType: "xlsx" });

    // 7️⃣ Generamos nombre único para el archivo usando fecha/hora
    const fileName = `Informe_Bobinas_${new Date()
      .toISOString()
      .replace(/:/g, "-")
      .split(".")[0]}.xlsx`;

    // 8️⃣ Definimos la ruta de guardado dentro del sistema de archivos del dispositivo
    const fileUri = FileSystem.documentDirectory + fileName;

    // 9️⃣ Escribimos el archivo como base64 en la ruta especificada
    await FileSystem.writeAsStringAsync(fileUri, wbout, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // 🔟 Intentamos compartir el archivo usando la app nativa del sistema
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(fileUri);
    } else {
      alert("No se puede compartir el archivo en este dispositivo.");
    }
  } catch (error) {
    console.error("Error al exportar a Excel:", error);
  }
};
