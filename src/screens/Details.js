import React from 'react';
import { View, Text } from 'react-native';

export default function Details({ route }) {
  const { post } = route.params;

  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.article}</Text>
      {/* Display Image/Video here */}
    </View>
  );
}


{/*import React from 'react';
import { View, Text, Image } from 'react-native';

const Details = ({ route }) => {
  const { post } = route.params;
  return (
    <View>
      <Text>{post.title}</Text>
      <Image source={{ uri: post.imageURL }} style={{ width: 200, height: 200 }} />
      <Text>{post.article}</Text>
    </View>
  );
};

export default Details;*/}
