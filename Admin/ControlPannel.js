import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function ControlPanel() {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');

  const uploadPost = async () => {
    await firestore().collection('posts').add({
      title,
      article,
      // add image/video URL here
    });
  };

  return (
    <View>
      <Text>Control Panel</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Article"
        value={article}
        onChangeText={(text) => setArticle(text)}
      />
      <Button title="Upload Post" onPress={uploadPost} />
    </View>
  );
}
