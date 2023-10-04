import { StyleSheet, Modal, Pressable, View, Text } from "react-native";
import { THEME } from "../../theme/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ModalTodo = ({ todo, modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <View style={{flexDirection:"row", gap: 20}}>
              <MaterialCommunityIcons name="notebook" size={24} color="white" />
              <Text style={styles.modalTitle}>
              {todo !== null ? todo.name : "defaultValue"}
            </Text>
            </View>
            
            <View style={styles.line}></View>
            <Text>
              <Text style={styles.modalText}>Created: </Text>
              <Text style={styles.modalDates}>
                {" "}
                {todo !== null ? todo.createdDate : "defaultValue"}
              </Text>
            </Text>
            {todo !== null && (
              <Text>
                <Text style={styles.modalText}>Update: </Text>
                <Text style={styles.modalDates}>{todo.editDate ? todo.editDate : "Not Edited" }</Text>
              </Text>
            )}
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: THEME.COLORS.SECONDARY,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "50%",
    width: "80%",
  },
  modalHeader: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    width: "100%",
    alignSelf: "flex-end",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: THEME.COLORS.RED,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 20,
    alignSelf: "center",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
    color: THEME.COLORS.WHITE,
  },
  modalText: {
    color: THEME.COLORS.WHITE,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalDates: {
    color: THEME.COLORS.RED,
    marginBottom: 15,
    textAlign: "center",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: THEME.COLORS.WHITE,
    marginBottom: 15,
  },
});

export default ModalTodo;
