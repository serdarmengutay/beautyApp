import React, {useState, useRef} from 'react';
import {
  TouchableOpacity,
  FlatList,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import { Width, Height } from '../../constants/dimensions';
import { theme } from '../../constants/theme';
import {slidesData} from '../../constants/db/index';
import { NavigationProps } from '../../types/navigation-props';
import {styles} from './styles';

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

const OnboardingScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const Footer = () => {
    return (
      <View
        style={{
          height: Height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          position: 'absolute',
          bottom: 30,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {slidesData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: theme.palette.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: 20}}>
          <View style={{height: 50}}>
            {currentSlideIndex == slidesData.length - 1 ? (
              <TouchableOpacity style={[styles.btn]} onPress={() => navigation.replace('HomeScreen')}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            ) : (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={Skip}
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'transparent',
                      borderWidth: 1,
                      borderColor: theme.palette.white,
                    },
                  ]}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: theme.palette.white,
                    }}>
                    SKIP
                  </Text>
                </TouchableOpacity>
                <View style={{width: 15}} />
                <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                    NEXT
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / Width);
    setCurrentSlideIndex(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slidesData.length) {
      const offset = nextSlideIndex * Width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const Skip = () => {
    const lastSlidesIndex = slidesData.length - 1;
    const offset = lastSlidesIndex * Width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlidesIndex);
  };
  return (
    <View>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slidesData}
        contentContainerStyle={{height: Height}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        renderItem={({item}) => <Slide item={item} />}
        pagingEnabled
        bounces={false}
      />
      <Footer />
      </View>
  );
};


export default OnboardingScreen;