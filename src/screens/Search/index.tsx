import { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationProps } from "../../types/navigation-props";
import Icon from "../../components/Icon";
import { theme } from "../../constants/theme";
import { dummyLocationData, filterOptions } from "../../constants/db";
import { styles } from "./styles";

const Search: React.FC<NavigationProps> = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchText, setSearchText] = useState("");

  const filterLocations = (text: string) => {
    const lowerCaseText = text.toLowerCase();
    const filteredLocations = dummyLocationData.filter((location) =>
      location?.name?.toLowerCase()?.includes(lowerCaseText)
    );
    return filteredLocations;
  };

  const handleLocationPress = () => {};

  const services = [
    {
      id: "1",
      name: "Haircut",
      image: require("../../assets/images/haircutImage.png"),
    },
    {
      id: "2",
      name: "Hair Color",
      image: require("../../assets/images/shaveForMen.png"),
    },
    {
      id: "3",
      name: "Hair Spa",
      image: require("../../assets/images/bleachForWomen.png"),
    },
    {
      id: "4",
      name: "Facial",
      image: require("../../assets/images/facialForWomen.png"),

    },
    {
      id: "5"
,     name: "Manicure",
      image: require("../../assets/images/waxingForWomen.png"),
    },
    {
      id: "6",
      name: "Pedicure",
      image: require("../../assets/images/waxingForWomen.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerWrapper}>
            <Icon name="pin-outline" size={22} color={theme.palette.black} />
            <Text style={styles.headerText}>
              {selectedLocation || "Select Location"}
            </Text>
            <Icon name="chevron-down" size={22} color={theme.palette.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerInputContainer}>
          <View style={styles.headerInputStyle}>
            <Icon name="magnify" size={22} color={theme.colors.primary} />
            <TextInput
              placeholder="Shop name or service..."
              style={styles.headerInput}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
        </View>
        <View style={styles.filterContainer}>
          {filterOptions.map((option) => (
            <TouchableOpacity style={styles.filterBtn} activeOpacity={theme.activeOpacity} key={option.id} onPress={() => {}}>
              <Text style={styles.filterOptionText}>{option.name}</Text>
              <Icon name="chevron-down" size={22} color={theme.palette.black} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.servicesContainer}>
          <View style={styles.servicesHeader}>
            <Text style={styles.servicesHeaderText}>Beauty Services</Text>
            <TouchableOpacity activeOpacity={theme.activeOpacity} style={styles.seeAllBtn} onPress={() => {}}>
              <Text style={styles.servicesHeaderLink}>See all</Text>
              <Icon name="chevron-right" size={22} color={theme.palette.black} />
            </TouchableOpacity>
          </View>
          <View style={styles.servicesBody}>
            {services.map((service) => (
              <TouchableOpacity activeOpacity={theme.activeOpacity} key={service.id} style={styles.serviceItem}>
                <Image source={service.image} style={styles.serviceImage} />
                <Text style={styles.serviceName}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
