import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "../components/TopBar";
import ButtonArrange from "../components/ButtonArrange";
import BottomBar from "../components/BottomBar";
import AssetList from "../components/AssetList";
import FontAwesomeIcon from "react-native-vector-icons/Feather";

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TopBar title="Wallet" />
        <View style={styles.sectionnums}>
          <Text style={styles.number}>$23,867</Text>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.subnumber}>Wallet id: 4657381901</Text>
            <FontAwesomeIcon style={{marginLeft: 6}} name="copy" size={14} color={"white"} />
          </View>
        </View>
        <ButtonArrange />
      </View>
      <View style={styles.section2}>
        <Text style={styles.menuText}>My Assets</Text>
        <AssetList />
        <BottomBar />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d96e43",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  section: {
    height: 360,
    width: 360,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  section2: {
    backgroundColor: "white",
    flex: 1,
    width: 370,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
  sectionnums: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 70,
    color: "white",
  },
  subnumber: {
    fontSize: 16,
    color: "white",
  },
  menuText: {
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 40,
    marginTop: 20,
    fontWeight: "700",
  },
});

export default Main;
