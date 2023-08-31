import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import Login from "./src/screens/Login";
import Person from "./src/components/Person";

const DATA = [
  { id: 0, name: "eder", lastName: "rivera" },
  { id: 1, name: "eder1", lastName: "rivera" },
  { id: 2, name: "eder2", lastName: "rivera" },
  { id: 3, name: "eder3", lastName: "rivera" },
];

export default function App() {
  const { height, width } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <FlatList
        data={DATA}
        renderItem={({item: {name,lastName}, index}) => (
          <Person name={name} lastName={lastName} index={index} />
        )}
        ItemSeparatorComponent={<View style={{}}></View>}
        keyExtractor={({id}) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
});

{
  /*{DATA.map(({id,name,lastName}) => (
        <View key={id} style={{borderWidth: 1, borderColor: 'red'}}>
          <Text style={{fontSize:40}}>{name}</Text>
          <Text style={{fontSize:40}}>{lastName}</Text>
        </View>
        
      ))}*/
}