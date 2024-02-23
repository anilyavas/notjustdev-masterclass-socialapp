import FeedScreen from '../screens/FeedScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePostScreen from '../screens/CreatePostScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator initialRouteName='Feed'>
      <Stack.Screen
        name='Feed'
        component={FeedScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <FontAwesome
              onPress={() => navigation.navigate('Profile')}
              name='user'
              size={24}
              color='gray'
            />
          ),
        })}
      />
      <Stack.Screen name='Create Post' component={CreatePostScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Update Profile' component={UpdateProfileScreen} />
    </Stack.Navigator>
  );
}
