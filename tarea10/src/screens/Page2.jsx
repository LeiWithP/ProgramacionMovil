import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

const Page2 = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Text style={{ color: theme.text, fontSize: 24, margin: 20 }}>
        Screen 2
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Page3')}
        style={{
          backgroundColor: theme.text,
          padding: 10,
          borderRadius: 8,
          alignSelf: 'center',
        }}
      >
        <Text style={{ color: theme.background }}>Go to Screen 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleTheme}
        style={{
          marginTop: 20,
          backgroundColor: theme.text,
          padding: 10,
          borderRadius: 8,
          alignSelf: 'center',
        }}
      >
        <Text style={{ color: theme.background }}>Toggle Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page2;
