import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const user = {
  id: 'u1',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Vadim Savin',
};

const CreatePostScreen = () => {
  const [description, setDescription] = useState('');
  // const insets = useSafeAreaInsets();

  const onSubmit = () => {
    console.warn('On Submit: ', description);
    setDescription('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { marginBottom: 10 }]}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={150}
    >
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <TextInput
        placeholder="What's on your mind?"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit} title='Post' disabled={!description} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    paddingTop: 30,
    backgroundColor: 'white',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  input: {
    marginBottom: 'auto',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginVertical: 10,
  },
});

export default CreatePostScreen;
