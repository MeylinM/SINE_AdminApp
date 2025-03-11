import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { pdfStyles } from "./pdfStyles";

export const generarPDF = async (filteredBobinas) => {
  try {
    let tableRows = filteredBobinas
      .map(
        (bobina) => `
        <tr>
          <td>${bobina.matricula}</td>
          <td>${bobina.nombre_almacen}</td>
          <td>${bobina.ot}</td>
          <td>${bobina.descripcion_obra}</td>
          <td>${bobina.estado}</td>
          <td>${bobina.empleado1 || "-"}</td>
          <td>${bobina.fecha1 || "-"}</td>
          <td>${bobina.empleado2 || "-"}</td>
          <td>${bobina.fecha2 || "-"}</td>
          <td>${bobina.empleado3 || "-"}</td>
          <td>${bobina.fecha3 || "-"}</td>
          <td>${bobina.observaciones}</td>
        </tr>
      `
      )
      .join("");
    // Obtener fecha y hora de la exportación
    const now = new Date();
    const fechaHora = now.toLocaleString(); // Formato local de fecha y hora
    const fileNameFecha = now
      .toISOString()
      .replace(/T/, "_")
      .replace(/:/g, "-")
      .split(".")[0];

    // Plantilla HTML con márgenes, título y fecha
    let htmlContent = `
      <html>
        <head>
          <style>
            ${pdfStyles}
          </style>
        </head>
        <body>
          <h1>Informe de Bobinas</h1>
          <p class="fecha">Exportado el: ${fechaHora}</p>
          <table>
            <tr>
              <th>Matrícula</th>
              <th>Almacén</th>
              <th>OT</th>
              <th>Descripción de obra</th>
              <th>Estado</th>
              <th>Recogido por</th>
              <th>Fecha Recogida</th>
              <th>Devuelto por</th>
              <th>Fecha Devolución</th>
              <th>Confirmado por</th>
              <th>Fecha Confirmación</th>
              <th>Observaciones</th>
            </tr>
            ${tableRows}
          </table>
        </body>
      </html>
    `;

    // Generar el PDF
    const { uri } = await Print.printToFileAsync({
      html: htmlContent, // Asegura que el PDF use color
    });

    // Compartir el archivo
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(uri);
    } else {
      alert("No se puede compartir el archivo en este dispositivo.");
    }
  } catch (error) {
    console.error("Error al generar el PDF:", error);
  }
};
