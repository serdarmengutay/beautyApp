import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    resizeMode: 'cover',
    backgroundColor: 'black',
  },
  cardImage: {
    width: 350,
    height: 250,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSection: {
    flex: 1,
    padding: theme.spacing.sm,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardAddress: {
    fontSize: 14,
    color: '#888',
  },
  cardRating: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
