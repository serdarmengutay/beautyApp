import { TouchableOpacity, View, Text } from 'react-native';
import { ButtonProps } from '../../types';
import {styles} from './styles'
import { theme } from '../../constants/theme';


const Button: React.FC<ButtonProps> = ({ title, icon, onPress, isDisabled }) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={theme.activeOpacity}
        disabled={isDisabled}
        style={[!isDisabled  ? styles.buttonContainer : styles.disabledButtonContainer]}>
        <Text style={styles.buttonText}>{title}</Text>
        {icon && <View style={styles.icon}>{icon}</View>}
        </TouchableOpacity>
    )
}   

export default Button;