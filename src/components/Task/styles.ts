import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#333333",
    height: 65,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 5,
  },
  checkView: {
    width: 45,
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#5E60CE",
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  unchecked: {
    borderWidth: 2,
    height: 20,
    width: 20,
    borderRadius: 20,
    borderColor: "#4EA8DE",
  },
  text: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14,
  },
  textChecked: {
    flex: 1,
    color: "#808080",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  remove: {
    width: 45,
    alignItems: "center",
  },
});
