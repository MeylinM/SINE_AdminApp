// styles/empleados.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content: {
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 30,
    alignItems: "center",
    width: "100%",
  },
  box: {
    backgroundColor: "#cceeff",
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
    width: "100%",
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#019edf",
  },
  subheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    color: "#019edf",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 25,
    width: "100%",
  },
  image: {
    width: 150,
    height: 300,
    marginRight: 12,
    borderRadius: 8,
  },
  text: {
    flex: 1,
    fontSize: 15,
    textAlign: "justify",
    color: "#333",
  },
  back: {
    color: "#019edf",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
});
