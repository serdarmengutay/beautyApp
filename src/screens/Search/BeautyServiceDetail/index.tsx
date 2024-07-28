import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../../types/navigation-props';
import Icon from '../../../components/Icon';
import {theme} from '../../../constants/theme';
import {filterOptions} from '../../../constants/db';
import {styles as serviceStyles} from './styles';
import ShopCard from '../../../components/ShopCard';

const BeautyServiceDetail: React.FC<NavigationProps> = ({
  route,
  navigation,
}) => {
  const {data}: any = route?.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={serviceStyles.container}>
      <StatusBar barStyle="light-content" translucent hidden={true} />
      <ImageBackground
        source={data.image}
        style={serviceStyles.imageBackground}>
        <View style={serviceStyles.imageBackgroundHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={22} color={theme.palette.white} />
          </TouchableOpacity>
          <View style={serviceStyles.locationContainer}>
            <Icon name="pin-outline" color={theme.palette.white} size={18} />
            <Text style={serviceStyles.locationText}>Munich</Text>
            <Icon name="chevron-down" color={theme.palette.white} size={18} />
          </View>
          <View style={serviceStyles.headerPlaceholder} />
        </View>
        <View style={serviceStyles.imageBackgroundTitleContainer}>
          <Text numberOfLines={2} style={serviceStyles.imageBackgroundTitle}>
            {data?.name}
          </Text>
        </View>
      </ImageBackground>
      <View style={serviceStyles.contentContainer}>
        <View style={serviceStyles.filterContainer}>
          {filterOptions?.map(option => (
            <TouchableOpacity
              style={serviceStyles.filterBtn}
              activeOpacity={theme.activeOpacity}
              key={option.id}
              onPress={() => {}}>
              <Text style={serviceStyles.filterOptionText}>{option.name}</Text>
              <Icon name="chevron-down" size={22} color={theme.palette.black} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={serviceStyles.shopContainer}>
          <Text style={serviceStyles.shopFieldTitle}>
            {data.shops.length} shops giving {data.name} service
          </Text>
          <FlatList
            renderItem={({item}) => <ShopCard data={item} />}
            data={data.shops}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BeautyServiceDetail;

const styles = StyleSheet.create({});
