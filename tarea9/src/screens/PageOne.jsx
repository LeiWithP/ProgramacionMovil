import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../components/ThemeProvider";
import TransactionsMenu from "../components/TransactionsMenu";

function PageOne() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colors.background,
      paddingTop: 20,
    },
    minimenu: {
      width: 320,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    simplerow: {
      width: 370,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    graph: {
      width: 360,
      height: 220,
      // backgroundColor: 'violet',
    },
    text: {
      fontSize: 18,
      fontWeight: "400",
      color: "grey",
    },
    numbers: {
      fontSize: 52,
      fontWeight: "400",
      color: theme.colors.text,
    },
  });

  return (
    <View style={styles.container}>
      {/* <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      > */}
        <Text style={styles.text}>Total balance</Text>
      {/* </View> */}
      <Text style={styles.numbers}>$32,751.75</Text>
      <View
        style={styles.minimenu}
      >
        <Text style={styles.text}>Day</Text>
        <Text style={styles.text}>Week</Text>
        <Text style={styles.text}>Month</Text>
        <Text style={styles.text}>Year</Text>
      </View>
      <View style={styles.graph} />
      <View
        style={styles.simplerow}
      >
        <Text style={styles.text}>Jan</Text>
        <Text style={styles.text}>Feb</Text>
        <Text style={styles.text}>Mar</Text>
        <Text style={styles.text}>Apr</Text>
        <Text style={styles.text}>May</Text>
        <Text style={styles.text}>Jul</Text>
      </View>
      <TransactionsMenu/>
    </View>
  );
}

export default PageOne;
