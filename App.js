import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';
import { StatusBar } from 'expo-status-bar';
import { FeedPost } from './src/components/FeedPost';
import posts from './assets/data/posts.json';

export default function App() {
  return (
    <SafeAreaView styles={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <FeedPost post={item} />}
      />
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
