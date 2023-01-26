import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

interface Props {
  task: string;
  completed: boolean;
  onCheck: () => void;
  onRemove: () => void;
}

export function Task({ task, completed = true, onCheck, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkView} onPress={onCheck}>
        {completed ? (
          <View style={styles.checked}>
            <Feather name="check" color="#F2F2F2" />
          </View>
        ) : (
          <View style={styles.unchecked} />
        )}
      </TouchableOpacity>

      <Text style={completed ? styles.textChecked : styles.text}>{task}</Text>

      <TouchableOpacity style={styles.remove} onPress={onRemove}>
        <Feather name="trash-2" color="#808080" size={20} />
      </TouchableOpacity>
    </View>
  );
}
