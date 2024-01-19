import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function View1() {
  return (
    <View style={styles.container}>
      <Text>Hello, SER 423! My name is Ishtpreet Singh.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94ECBE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
