import { SafeAreaView, StyleSheet } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView styles={styles.container}>
      <FeedScreen />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
