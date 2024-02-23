import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const user = {
  id: 'u1',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Vadim Savin',
};

export default function CreatePostScreen() {
  const navigation = useNavigation();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const onSubmit = () => {
    console.warn('On Submit: ', description);
    setDescription('');
    navigation.goBack();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Entypo
          onPress={pickImage}
          name='images'
          size={24}
          color='limegreen'
          style={styles.icon}
        />
      </View>
      <TextInput
        placeholder="What's on your mind?"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit} title='Post' disabled={!description} />
      </View>
    </View>
  );
}

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
  icon: {
    marginLeft: 'auto',
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
    alignSelf: 'center',
  },
});
