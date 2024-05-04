import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

interface ButtonProps {
  title: string
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button;