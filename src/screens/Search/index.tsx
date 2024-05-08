import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationProps } from '../../types/navigation-props'
import {styles} from './styles'


const Search: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Search</Text>
        <Button title='Go to Search Detail' onPress={() => navigation.navigate('SearchDetail')}/> 
    </View>
  )
}

export default Search;
