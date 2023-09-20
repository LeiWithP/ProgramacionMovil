import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const Todo = ({ name, onDelete, onEdit }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(name);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset the edited text if canceled
    setEditedText(name);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <FontAwesome
          name={isChecked ? "check-square" : "square-o"}
          size={24}
          color={isChecked ? "#E9B384" : "#E9B384"}
          onPress={toggleCheckbox}
          style={styles.checkbox}
        />
        {isEditing ? (
          <TextInput
            style={styles.editableText}
            value={editedText}
            onChangeText={(text) => setEditedText(text)}
          />
        ) : (
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#E9B384" }}>
            {name}
          </Text>
        )}
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {isEditing ? (
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Entypo
              name="check"
              size={24}
              color="#E9B384"
              onPress={handleSaveEdit}
            />
            <Entypo
              name="cross"
              size={24}
              color="#E9B384"
              onPress={handleCancelEdit}
            />
          </View>
        ) : (
          <Entypo
            name="edit"
            size={24}
            color="#E9B384"
            onPress={handleEditPress}
          />
        )}
        <Entypo name="trash" size={24} color="#E9B384" onPress={onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#F4F2DE",
  },
  checkbox: {
    alignSelf: "center",
    marginRight: 10,
  },
  editableText: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    color: "#E9B384",
  },
});

export default Todo;
