import {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {isIOS} from '../../constants/platform';
import RegisterHeader from '../../components/RegisterHeader';
import {theme} from '../../constants/theme';

const RegistrationStepOne = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <RegisterHeader />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={isIOS ? 'padding' : 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.inputContainer}>
            <Input
              label="Name"
              placeholder="Enter your name"
              onChangeText={text => console.log(text)}
              icon={<Icon name="" size={20} />}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              keyboardType="email-address"
              onChangeText={text => console.log(text)}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              keyboardType="password"
              onChangeText={text => console.log(text)}
              secureTextEntry={!showPassword}
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
            <Button title="Register" onPress={() => console.log('Register')} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegistrationStepOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  inputContainer: {
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.xl,
  },
  registerBtn: {
    marginTop: theme.spacing.xl,
  },
});
