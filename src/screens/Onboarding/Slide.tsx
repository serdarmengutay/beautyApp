import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { styles } from './styles'


const Slide = ({item}: any) => {
    return (
        <ImageBackground
          source={item.image}
          style={styles.backgroundImageStyles}
      >
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        </View>
        </ImageBackground>
    );
  };
  

  export default Slide;