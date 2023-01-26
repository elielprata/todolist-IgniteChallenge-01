import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons as Feather } from "@expo/vector-icons";
import { Counter } from "../../components/Counter";
import { Task } from "../../components/Task";
import { useState } from "react";

type TasksProps = {
  name: string;
  completed: boolean;
};

export const Home = () => {
  const [nameTask, setNameTask] = useState("");
  const [tasks, setTasks] = useState<TasksProps[]>([
    { name: "Fazer exercícios", completed: false },
    { name: "Fazer compras", completed: true },
  ]);

  function handleAddTask() {
    setTasks((prevState) => [
      ...prevState,
      { name: nameTask, completed: false },
    ]);

    setNameTask("");
  }

  function handleRemoveTask(taskName: string) {
    Alert.alert("Remover", `Remover a tarefa "${taskName}"?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) =>
            prevState.filter((task) => task.name !== taskName)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleToggleCompleted(taskName: string) {
    if (
      tasks.some((task) => task.name === taskName && task.completed === true)
    ) {
      const newState = tasks.map((task) => {
        if (task.name === taskName) {
          return { ...task, completed: false };
        }

        return task;
      });

      setTasks(newState);
    } else {
      const newState = tasks.map((task) => {
        if (task.name === taskName) {
          return { ...task, completed: true };
        }

        return task;
      });

      setTasks(newState);
    }
  }

  function concludedTasks() {
    const count = tasks.reduce((acc, task) => {
      return acc + (task.completed ? 1 : 0);
    }, 0);

    return count;
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../assets/Logo.png")} />
      </View>
      <View style={styles.container}>
        <View style={styles.addView}>
          <TextInput
            style={styles.addInput}
            placeholder="Adicione uma tarefa"
            placeholderTextColor="#808080"
            value={nameTask}
            onChangeText={setNameTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Feather name="plus-circle" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.tasksView}>
          <View style={styles.infoTasks}>
            <Counter count={tasks.length}>
              <Text style={styles.createdText}>Criadas</Text>
            </Counter>
            <Counter count={concludedTasks()}>
              <Text style={styles.doneText}>Concluídas</Text>
            </Counter>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.listTasks}
          >
            {tasks.map((task, i) => (
              <Task
                key={i}
                completed={task.completed}
                task={task.name}
                onCheck={() => handleToggleCompleted(task.name)}
                onRemove={() => handleRemoveTask(task.name)}
              />
            ))}
          </ScrollView>

          {tasks.length === 0 && (
            <View style={styles.empty}>
              <Feather
                name="clipboard-text"
                color="#333333"
                size={50}
                style={{ marginBottom: 20 }}
              />
              <Text style={{ ...styles.emptyText, fontWeight: "bold" }}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};
