import React, {useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {theme} from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';

const OTPScreen = ({navigation}) => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [otp, setOTP] = React.useState(['', '', '', '']);

  const handleChange = (index, value) => {
    let newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }

    if (!value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleRegister = () => {
    console.log('otp', otp);
    navigation.navigate('BottomTabNavigator');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleResendOTPCode = () => {
    Alert.alert('OTP Code resent to your phone. Please check one more time!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.goBackIcon} onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color={theme.palette.black} />
      </TouchableOpacity>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Verify OTP</Text>
      </View>
      <View style={styles.boxField}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => handleChange(index, value)}
            value={digit}
            ref={inputRefs[index]}
          />
        ))}
      </View>
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn't receive the code ?{' '}
          <Text style={styles.resendCode} onPress={handleResendOTPCode}>
            Resend
          </Text>
        </Text>
      </View>
      <View style={styles.registerBtn}>
        <Button title="Send OTP" onPress={handleRegister} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.white,
  },
  goBackIcon: {
    paddingHorizontal: theme.spacing.md,
  },
  pageTitleContainer: {
    paddingHorizontal: theme.spacing.md,
  },
  pageTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.black,
    marginTop: theme.spacing.md,
  },
  boxField: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: theme.spacing.lg,
  },
  input: {
    height: 50,
    width: 60,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 20,
    marginRight: 10,
    color: theme.colors.text,
  },
  resendContainer: {
    paddingHorizontal: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  resendText: {
    color: theme.palette.gray,
  },
  resendCode: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: theme.colors.primary,
    color: theme.colors.primary,
  },
  registerBtn: {
    bottom: 30,
    position: 'absolute',
    width: '100%',
    marginBottom: theme.spacing.xl,
  },
});

export default OTPScreen;
