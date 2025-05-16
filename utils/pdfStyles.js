export const pdfStyles = `
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      padding: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
      text-align: center;
      width: 100%;
      display: block;
      color: black; /* Asegura que el texto se mantenga negro */
    }
    .fecha {
      font-size: 12px;
      text-align: right;
      margin-bottom: 10px;
      width: 100%;
      color: black;
    }
    table {
      width: 80%;
      max-width: 800px;
      border-collapse: collapse;
      font-size: 12px;
      margin: 20px auto;
      text-align: center;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: center;
      color: black; /* Asegura que el contenido se mantenga en color */
    }
    th {
      background-color: #019edf; /* Azul */
      color: white;
    }
  </style>
`;