import {useState, useRef} from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import { Width, Height } from '../../constants/dimensions';
import {slidesData} from '../../constants/db/index';
import { NavigationProps } from '../../types/navigation-props';
import Footer from './Footer';
import Slide from './Slide';

const OnboardingScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
 
  const updateCurrentSlideIndex = (e : any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / Width);
    setCurrentSlideIndex(currentIndex);
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
      <Footer 
      ref={ref}
      currentSlideIndex={currentSlideIndex}
      setCurrentSlideIndex={setCurrentSlideIndex}
      navigation={navigation}
      />
      </View>
  );
};

export default OnboardingScreen;