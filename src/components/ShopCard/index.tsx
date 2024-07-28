import {Image, View, Text} from 'react-native';
import {ShopCardProps} from '../../types';
import {styles as cardStyles} from './styles';

const ShopCard: React.FC<ShopCardProps> = ({data}) => {
  return (
    <View style={cardStyles.cardContainer}>
      <View style={cardStyles.imageContainer}>
        <Image source={data.image} style={cardStyles.cardImage} />
      </View>
      <View style={cardStyles.infoSection}>
        <Text style={cardStyles.cardName}>{data.name}</Text>
        <Text style={cardStyles.cardAddress}>{data.address}</Text>
        <Text style={cardStyles.cardRating}>{data.rating}</Text>
      </View>
    </View>
  );
};

export default ShopCard;
