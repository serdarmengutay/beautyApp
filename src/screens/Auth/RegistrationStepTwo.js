import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../constants/theme';
import keyboardDismiss from '../../utils/keyboardDismiss';
import Button from '../../components/Button';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RegistrationStepTwo = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const phoneInput = useRef(null);

  const handleRegister = () => {
    setIsValid(phoneInput.current?.isValidNumber(phoneNumber));

    if (phoneInput.current?.isValidNumber(phoneNumber)) {
      console.log('Phone Number:', formattedPhoneNumber);
      navigation.navigate('RegistrationStepThree', {
        phoneNumber: formattedPhoneNumber,
      });
    } else {
      console.log('Invalid Phone Number:', formattedPhoneNumber);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardDismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            activeOpacity={theme.activeOpacity}
            onPress={() => navigation.goBack()}>
            <Icon name="close" size={24} />
          </TouchableOpacity>
          <Text style={styles.inputLabel}>Enter Phone Number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            countryPickerButtonStyle={styles.countryPickerButtonStyle}
            codeTextStyle={styles.codeTextStyle}
            textInputStyle={styles.textInputStyle}
            defaultCode="TR"
            placeholder="Enter phone number"
            filterProps={{
              isValid: isValid,
            }}
            value={formattedPhoneNumber}
            autoFocus={true}
            countryPickerProps={{
              withAlphaFilter: true,
              withCallingCode: true,
              withEmoji: true,
            }}
            onChangeCountry={code => {
              setCountryCode(code);
            }}
            withDarkTheme
            layout="second"
            onChangeText={text => {
              setPhoneNumber(text);
            }}
            onChangeFormattedText={text => {
              setFormattedPhoneNumber(text);
            }}
            containerStyle={styles.containerStyle}
            textContainerStyle={styles.textContainerStyle}
          />
        </View>
        <View style={styles.registerBtn}>
          <Button title="Send OTP" onPress={handleRegister} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationStepTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.white,
  },
  inputContainer: {
    marginHorizontal: theme.spacing.md,
  },
  containerStyle: {
    marginTop: theme.spacing.lg,
    height: 40,
    borderColor: theme.palette.lightGrey,
    borderRadius: 12,
  },
  inputLabel: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.black,
    marginTop: theme.spacing.md,
  },
  countryPickerButtonStyle: {
    backgroundColor: theme.colors.primary,
    color: theme.palette.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeTextStyle: {
    color: theme.palette.white,
  },
  textInputStyle: {
    color: theme.colors.black,
    borderRadius: 10,
    height: 40,
    paddingLeft: 10,
  },
  registerBtn: {
    bottom: 30,
    position: 'absolute',
    width: '100%',
    marginBottom: theme.spacing.xl,
  },
});
