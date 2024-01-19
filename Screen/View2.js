import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function View2() {
  return (
    <View style={styles.container}>
      <Text>Thanks for using my app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E84855',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
