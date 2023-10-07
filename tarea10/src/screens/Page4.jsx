const Page4 = ({ navigation }) => {
    const { colors } = useTheme();
  
    return (
      <View style={[styles.container, { backgroundColor: colors.primaryBackground }]}>
        <Text style={[styles.text, { color: colors.text }]}>Page 2</Text>
        <Button title="Go to Page 3" onPress={() => navigation.navigate('Page3')} />
      </View>
    );
  };
  
  export default Page4;