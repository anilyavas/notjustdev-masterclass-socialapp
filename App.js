import { SafeAreaView, StyleSheet } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';
import { StatusBar } from 'expo-status-bar';
import CreatePostScreen from './src/screens/CreatePostScreen';

export default function App() {
  return (
    <SafeAreaView styles={styles.container}>
      <CreatePostScreen />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
