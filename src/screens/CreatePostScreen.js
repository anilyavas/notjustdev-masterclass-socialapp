import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

const user = {
  id: 'u1',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Vadim Savin',
};
const CreatePostScreen = () => {
  const [description, setDescription] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <TextInput
        placeholder='What is on your mind?'
        multiline
        value={description}
        onChangeText={setDescription}
      />
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    marginTop: 20,
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
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
});
