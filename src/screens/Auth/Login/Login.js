import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {useState} from 'react';
import keyboardDismiss from '../../../utils/keyboardDismiss';
import {theme} from '../../../constants/theme';
import Input from '../../../components/Input';
import {Height} from '../../../constants/dimensions';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import {isIOS} from '../../../constants/platform';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNavigateSignUp = () => {
    navigation.replace('RegistrationStepOne');
  };

  const handleRegister = () => {
    console.log('Login', {email, password});
    navigation.navigate('BottomTabNavigator');
  };

  const checkDisabled = email === '' || password === '';

  const loginWith = provider => {
    console.log('Login with', provider);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardDismiss}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Welcome Back!</Text>
          <Text style={styles.noAccountContainer}>
            Don't you have an account ?{' '}
            <Text onPress={handleNavigateSignUp} style={styles.signUpText}>
              Sign Up!
            </Text>
          </Text>
        </View>
        <KeyboardAvoidingView behavior={isIOS ? 'padding' : 'height'}>
          <View style={styles.inputContainer}>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={text => setEmail(text)}
              icon={<Icon name="email" size={20} />}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <Input
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              icon={<Icon name={showPassword ? 'eye-off' : 'eye'} size={20} />}
              iconPressed={() => {
                setShowPassword(!showPassword);
              }}
              label="Password"
              placeholder="Enter your password"
            />
          </View>
          <View style={styles.registerBtn}>
            <Button
              isDisabled={checkDisabled}
              title="Login"
              onPress={handleRegister}
            />
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot your Password ?</Text>
        </TouchableOpacity>
        <View style={styles.orLoginSeparatorContainer}>
          <View style={styles.orLoginSeparator} />
          <Text style={styles.orLoginText}>Or Login Using</Text>
          <View style={styles.orLoginSeparator} />
        </View>
        <View style={styles.loginWithContainer}>
          <TouchableOpacity
            style={styles.loginWithButton}
            onPress={() => {
              loginWith('apple');
            }}>
            <Icon name="apple" size={30} />
            <Text style={styles.loginWithButtonText}>Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginWithButton}>
            <Icon name="google" size={30} />
            <Text style={styles.loginWithButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginWithButton}>
            <Icon name="facebook" size={30} />
            <Text style={styles.loginWithButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingVertical: 60,
  },
  header: {
    paddingHorizontal: theme.spacing.md,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.black,
    marginTop: theme.spacing.xl,
  },
  noAccountContainer: {
    marginTop: theme.spacing.sm,
    color: theme.colors.gray,
    fontSize: theme.fontSize.sm,
  },
  signUpText: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
  inputContainer: {
    marginHorizontal: theme.spacing.md,
    marginTop: Height * 0.15,
  },
  registerBtn: {
    marginTop: theme.spacing.lg,
    width: '100%',
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: theme.spacing.lg,
  },
  forgotPasswordText: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
  orLoginSeparatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.xl,
  },
  orLoginSeparator: {
    height: 1,
    backgroundColor: theme.palette.softWhite,
    flex: 1,
    marginHorizontal: theme.spacing.lg,
  },
  orLoginText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xs,
    fontWeight: '400',
  },
  loginWithContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing.xl,
  },
  loginWithButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  loginWithButtonText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    marginTop: theme.spacing.sm,
  },
});
