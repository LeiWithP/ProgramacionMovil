import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  Button,
  Alert,
  Switch,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { THEME } from "../../theme/styles";
import Header from "../../components/practica6/Header";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
 
  const [isFetching, setIsFetching] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        await delay(5000);
        
      } catch (error) {
        console.log(error);
      }finally {
        setIsFetching(false);
      }

    }
    fetchData();
  }, []);

  return (
    <View style={styles.centeredView}>
      <Text style={{ marginBottom: 400, fontSize: 50 }}>Hello World!</Text>
      { isFetching ? <ActivityIndicator size="large" color="#00ff00" /> : <Text style={{ fontSize: 50 }}>This is a text</Text> } 
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
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
      />
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      
      {isEnabled ? <Text style={{ fontSize: 50 }}>This is a text</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GUNMETAL,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default HomeScreen;
