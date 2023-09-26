import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as ReactStatus, View, Text } from "react-native";

import { THEME } from "../../theme/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { TouchableOpacity } from "react-native";

const Todo = ({
  id,
  name,
  handleDetails,
  handleDelete,
  handleComplete,
  handleEditMode,
  isEdited,
  createdDate,
  editDate,
  isCompleted,
}) => {
  return (
    <View style={[styles.container]}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <TouchableOpacity
          style={[styles.iconContainer, , isCompleted && styles.iconCompleted]}
          onPress={() => handleDetails(id)}
        >
          <MaterialCommunityIcons name="notebook" size={24} color="white" />
        </TouchableOpacity>
        <View style={{ justifyContent: "center", flexWrap: "wrap" }}>
          <Text
            style={[styles.taskText, isCompleted && styles.taskTextCompleted]}
          >
            {name}
          </Text>
          <Text
            style={[styles.datesText, isCompleted && styles.dateTextCompleted]}
          >
            {createdDate}
          </Text>
          {isEdited && (<Text
            style={[styles.datesText, isCompleted && styles.dateTextCompleted]}
          >
            Update: {editDate}
          </Text>)}
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <IconButton
          iconName="edit"
          iconSize={20}
          iconColor={!isCompleted ? "white" : THEME.COLORS.SLATE}
          onPress={() => handleEditMode(id)}
        />
        <IconButton
          iconName="cross"
          iconSize={24}
          iconColor={!isCompleted ? "white" : THEME.COLORS.SLATE}
          onPress={() => handleDelete(id)}
        />
        <IconButton
          iconName="check"
          iconSize={24}
          iconColor={!isCompleted ? "white" : THEME.COLORS.SLATE}
          onPress={() => handleComplete(id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent",
  },
  iconContainer: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: THEME.COLORS.SECONDARY,
  },
  iconCompleted: {
    backgroundColor: THEME.COLORS.GREEN,
  },
  taskText: {
    fontSize: 17,
    fontWeight: "bold",
    color: THEME.COLORS.WHITE,
  },
  taskTextCompleted: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: THEME.COLORS.GREEN,
  },
  datesText: {
    fontSize: 10,
    fontWeight: "bold",
    color: THEME.COLORS.RED,
  },
  dateTextCompleted: {
    color: THEME.COLORS.SLATE,
  },
});

export default Todo;
