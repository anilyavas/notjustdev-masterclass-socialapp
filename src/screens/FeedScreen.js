import { FeedPost } from '../components/FeedPost';
import posts from '../../assets/data/posts.json';
import { FlatList } from 'react-native';

const FeedScreen = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
    />
  );
};

export default FeedScreen;
