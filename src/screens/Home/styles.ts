import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 200,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 20,
  },
  addView: {
    flexDirection: "row",
    top: -30,
  },
  addInput: {
    flex: 1,
    marginRight: 5,
    color: "#F2F2F2",
    backgroundColor: "#262626",
    height: 54,
    fontSize: 16,
    padding: 12,
    borderRadius: 6,
  },
  addButton: {
    height: 54,
    width: 54,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  tasksView: {},
  infoTasks: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 20,
  },
  createdText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  doneText: {
    color: "#8284F4",
    fontSize: 14,
    fontWeight: "bold",
  },
  listTasks: {},
});
