import React from 'react';
import { View, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const LiveVideoScreen = () => {
  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={'100%'}
        play={true}
        videoId={'LMizLD8xw70'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set the background color to black
  },
});

export default LiveVideoScreen;
