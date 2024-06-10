import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {isIOS} from '../../constants/platform';
import {theme} from '../../constants/theme';
import keyboardDismiss from '../../utils/keyboardDismiss';
import RegisterHeader from '../../components/RegisterHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';

const RegistrationStepOne = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Registration logic here
    console.log('Register', {name, email, password});
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardDismiss}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <RegisterHeader />
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={isIOS ? 'padding' : 'height'}>
          <View style={styles.inputContainer}>
            <Input
              label="Name"
              placeholder="Enter your name"
              onChangeText={text => setName(text)}
              value={name}
              icon={<Icon name="account" size={20} />}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
              value={email}
              icon={<Icon name="email" size={20} />}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              keyboardType="default"
              onChangeText={text => setPassword(text)}
              secureTextEntry={!showPassword}
              value={password}
              iconPressed={() => setShowPassword(!showPassword)}
              icon={
                showPassword ? (
                  <Icon name="eye-off" size={20} />
                ) : (
                  <Icon name="eye" size={20} />
                )
              }
            />
          </View>
          <View style={styles.registerBtn}>
            <Button title="SignUp" onPress={handleRegister} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationStepOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.xl,
  },
  registerBtn: {
    bottom: 30,
    position: 'absolute',
    width: '100%',
    marginBottom: theme.spacing.xl,
  },
});
