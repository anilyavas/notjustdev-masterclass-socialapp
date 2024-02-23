import { NavigationContainer } from '@react-navigation/native';
import FeedScreen from '../screens/FeedScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePostScreen from '../screens/CreatePostScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Feed'>
        <Stack.Screen name='Feed' component={FeedScreen} />
        <Stack.Screen name='Create Post' component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
