import { StyleSheet, Text, View } from "react-native";
import CircleButton from "./CircleButton";
import FontAwesomeIcon from 'react-native-vector-icons/Feather';

const ButtonArrange = () => {
  return (
    <View style={styles.container}>
        <CircleButton>
          <FontAwesomeIcon name="arrow-down-left" size={30} color="black" />
        </CircleButton>
        <CircleButton>
          <FontAwesomeIcon name="arrow-up-right" size={30} color="black" />
        </CircleButton>
        <CircleButton>
          <FontAwesomeIcon name="refresh-ccw" size={30} color="black" />
        </CircleButton>
        <CircleButton>
          <FontAwesomeIcon name="plus" size={30} color="black" />
        </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 350,
  }
});

export default ButtonArrange;