import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigator from './navigation';

export default function App() {
  return (
    <View styles={styles.container}>
      <Navigator />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
