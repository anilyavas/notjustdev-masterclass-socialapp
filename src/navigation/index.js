import FeedScreen from '../screens/FeedScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePostScreen from '../screens/CreatePostScreen';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator initialRouteName='Feed'>
      <Stack.Screen name='Feed' component={FeedScreen} />
      <Stack.Screen name='Create Post' component={CreatePostScreen} />
    </Stack.Navigator>
  );
}
