import { View, StyleSheet } from 'react-native';
import Navigator from './src/navigation';

export default function App() {
  return (
    <View styles={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
