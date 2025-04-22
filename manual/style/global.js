// styles/globalHelpStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#e1e5e6",
  },
  headerImage: {
    width: "100%",
    height: 110,
    resizeMode: "cover",
    marginTop: 34,
    marginBottom: -45,
  },
  footerImage: {
    width: "100%",
    height: 60,
    resizeMode: "contain",
    marginTop: 30,
  },
  title: {
    color: "#019edf",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 20,
    textAlign: "justify",
  },
  bold: {
    fontWeight: "bold",
  },
  list: {
    width: "100%",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    color: "#333",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    marginBottom: 10,
  },
});
