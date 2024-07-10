import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {useState} from 'react';
import {theme} from '../../../constants/theme';
import Input from '../../../components/Input';
import {Height} from '../../../constants/dimensions';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Welcome Back!</Text>
        <Text style={styles.noAccountContainer}>
          Don't you have an account ?{' '}
          <Text onPress={handleNavigateSignUp} style={styles.signUpText}>
            Sign Up!
          </Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}
          icon={<Icon name="email" size={20} />}
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
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
    bottom: 30,
    position: 'absolute',
    width: '100%',
    marginBottom: theme.spacing.xl,
  },
});
