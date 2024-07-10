import { SafeAreaView, View, Text } from 'react-native';
import { styles } from './styles';
import { NavigationProps } from '../../types/navigation-props';

const RegisterHeader: React.FC<NavigationProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.text}>Already have an account ? <Text onPress={() => navigation.replace('Login')} style={styles.loginText}>Login</Text></Text>
            </View>
        </View>
    )
}

export default RegisterHeader;