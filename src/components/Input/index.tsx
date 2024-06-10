import { TextInput, View ,Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'
import { InputProps } from '../../types'
import { theme } from '../../constants/theme'


const Input: React.FC<InputProps> = ({ icon, iconPressed, onChangeText, label, value, secureTextEntry, placeholder }, props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}>{label}</Text>
        <View style={styles.inputContainer}>
            <TextInput 
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            style={styles.input}
            {...props}
            />
            {icon && <TouchableOpacity onPress={iconPressed} activeOpacity={theme.activeOpacity} style={styles.icon}>{icon}</TouchableOpacity>}
        </View>
        </View>
    )
}

export default Input;