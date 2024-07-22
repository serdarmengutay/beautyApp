import {useState} from 'react'
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { NavigationProps } from '../../types/navigation-props'
import Icon from '../../components/Icon'
import { theme } from '../../constants/theme'
import { dummyLocationData } from '../../constants/db'
import {styles} from './styles'

const Search: React.FC<NavigationProps> = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState('')
  const [searchText, setSearchText] = useState('')

  const filterLocations = (text: string) => {
    const lowerCaseText = text.toLowerCase()
    const filteredLocations = dummyLocationData.filter(location => location?.name?.toLowerCase()?.includes(lowerCaseText))
    return filteredLocations
  }

  const handleLocationPress = () => {
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerWrapper}>
            <Icon name='pin-outline' size={22} color={theme.palette.black}/>
            <Text style={styles.headerText}>
              {selectedLocation || 'Select Location'}
            </Text>
            <Icon name='chevron-down' size={22} color={theme.palette.black}/>
            </TouchableOpacity>
      </View>
      <View style={styles.headerInputContainer}>
        <View style={styles.headerInputStyle}>
        <Icon name='magnify' size={22} color={theme.colors.primary}/>
        <TextInput
          placeholder='Shop name or service...'
          style={styles.headerInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search;
