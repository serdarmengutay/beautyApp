import {TouchableOpacity, View, Text, StyleSheet, Animated} from 'react-native';
import {Height, Width} from '../../constants/dimensions';
import {theme} from '../../constants/theme';
import {slidesData} from '../../constants/db/index';
import {styles} from './styles';


const Footer = ({ ref, currentSlideIndex, setCurrentSlideIndex, navigation}: any) => {

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
    <View style={footerStyles.container}>
      <View style={footerStyles.indicatorContainer}>
        {slidesData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex === index && {
                backgroundColor: theme.palette.white,
              },
            ]}
          />
        ))}
      </View>
      <View style={{ marginBottom: 20 }}>
        <View style={{ height: 50 }}>
          {currentSlideIndex === slidesData.length - 1 ? (
            <TouchableOpacity style={[styles.btn]} onPress={() => navigation.replace('RegistrationStack')}>
              <Text style={footerStyles.getStartedText}>
                GET STARTED
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={footerStyles.btnCont}>
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
                <Text style={footerStyles.skipBtnText}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={footerStyles.nextCont} />
              <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                <Text style={footerStyles.nextText}>
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

  export default Footer;

  const footerStyles = StyleSheet.create({
    container: {
        height: Height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 30,
        width: '100%',
      },
      indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
      btnCont: {
        flexDirection: 'row'
    },
      skipBtnText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: theme.palette.white,
      },
      nextCont: {
        width: 15
    },
    nextText: {
        fontWeight: 'bold',
        fontSize: theme.fontSize.sm, 
        color: theme.palette.black
    },
    getStartedText: {
        fontWeight: 'bold', 
        fontSize: theme.fontSize.sm, 
        color: theme.palette.black
    }
  })