import { View, StyleSheet } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';
import { StatusBar } from 'expo-status-bar';
import CreatePostScreen from './src/screens/CreatePostScreen';

export default function App() {
  return (
    <View styles={styles.container}>
      <CreatePostScreen />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c9c9c9',
  },
});
