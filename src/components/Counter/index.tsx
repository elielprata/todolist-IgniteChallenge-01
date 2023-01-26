import { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
  count: number;
  children: ReactNode;
}

export function Counter({ count = 0, children, ...props }: Props) {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.counter}>
        <Text style={styles.text}>{count}</Text>
      </View>
    </View>
  );
}
