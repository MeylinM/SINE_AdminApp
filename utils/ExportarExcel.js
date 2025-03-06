import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import XLSX from "xlsx";

export const exportarExcel = async (filteredBobinas) => {
  try {
    if (filteredBobinas.length === 0) {
      alert("No hay datos para exportar.");
      return;
    }

    // 1️⃣ Crear los datos en formato JSON para la hoja de Excel
    let datos = filteredBobinas.map((bobina) => ({
      Matrícula: bobina.matricula,
      Almacén: bobina.almacen,
      Descripción: bobina.descripcion,
      Estado: bobina.estado,
      "Recogido por": bobina.infoRecogida.empleado || "-",
      "Fecha Recogida": bobina.infoRecogida.fechaHora || "-",
      "Devuelto por": bobina.infoDevolucion.empleado || "-",
      "Fecha Devolución": bobina.infoDevolucion.fechaHora || "-",
      "Confirmado por": bobina.infoConfirmacion.empleado || "-",
      "Fecha Confirmación": bobina.infoConfirmacion.fechaHora || "-",
      Observaciones: bobina.observaciones,
    }));

    // 2️⃣ Crear un libro de Excel y agregar una hoja con los datos
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(datos);

    // 3️⃣ Asegurar que la hoja tiene una referencia de rango (!ref)
    if (!ws["!ref"]) {
      const numRows = datos.length;
      const numCols = Object.keys(datos[0]).length;
      ws["!ref"] = XLSX.utils.encode_range({
        s: { r: 0, c: 0 },
        e: { r: numRows, c: numCols - 1 },
      });
    }

    // 4️⃣ Agregar la hoja al libro de Excel
    XLSX.utils.book_append_sheet(wb, ws, "Informe Bobinas");

    // 5️⃣ Convertir el archivo Excel a un buffer y guardarlo
    const wbout = XLSX.write(wb, { type: "base64", bookType: "xlsx" });

    // 6️⃣ Definir la ruta donde se guardará el archivo en el dispositivo
    const fileName = `Informe_Bobinas_${new Date().toISOString().replace(/:/g, "-").split(".")[0]}.xlsx`;
    const fileUri = FileSystem.documentDirectory + fileName;

    // 7️⃣ Guardar el archivo en la memoria del dispositivo
    await FileSystem.writeAsStringAsync(fileUri, wbout, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // 8️⃣ Compartir el archivo con el usuario
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(fileUri);
    } else {
      alert("No se puede compartir el archivo en este dispositivo.");
    }
  } catch (error) {
    console.error("Error al exportar a Excel:", error);
  }
};