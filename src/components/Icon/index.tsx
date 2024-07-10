import { IconProps } from "react-native-vector-icons/Icon";
import CustomIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon: React.FC<IconProps> = ({name, size, color}) => {
    return (
        <CustomIcon name={name} size={size} color={color}/>
    )
}

export default Icon;