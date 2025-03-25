import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerImage: {
    position: "absolute", // Se superpone al título
    top: 0, // Arriba
    width: "112%", // La imagen ocupa todo el ancho
    height: 300, // Ajusta la altura según lo necesites
    resizeMode: "cover", // Ajusta sin distorsionarse
    marginBottom: 20, // Acerca la imagen al título
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4a4a4a",
    marginTop: 310,
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#019edf",
    padding: 40,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    marginBottom: 40,
  },
  footer: {
    position: "absolute", // Se superpone al botón
    bottom: 20, // Abajo
    marginTop: 20,
    fontSize: 14,
    color: "#0096FF",
  },
});
