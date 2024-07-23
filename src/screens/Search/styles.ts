import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.sm,
    backgroundColor: theme.palette.white,
    borderRadius: 10,
    gap: theme.spacing.sm,
  },
  headerText: {
    fontSize: 16,
    color: theme.palette.black,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  headerInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.sm,
    backgroundColor: theme.palette.white,
    borderRadius: 10,
    margin: theme.spacing.sm,
    gap: theme.spacing.sm,
  },
  headerInput: {
    flex: 1,
    fontSize: 16,
    color: theme.palette.black,
  },
  headerInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.spacing.sm,
    padding: theme.spacing.sm,
    gap: theme.spacing.sm,
  },
  contentContainerStyle: {
    padding: theme.spacing.sm,
    flexGrow: 1,
  },
  filterContainer: {
    padding: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  filterBtn: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    backgroundColor: '#eee',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  filterOptionText: {
    color: theme.palette.black,
    fontSize: 13,
    fontWeight: '300',
  },
  servicesContainer: {
    padding: theme.spacing.sm,
  },
  servicesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
  },
  servicesHeaderText: {
    fontSize: theme.fontSize.md,
    color: theme.palette.black,
    fontWeight: 'bold',
  },
  seeAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  servicesHeaderLink: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  servicesBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    padding: theme.spacing.sm,
    backgroundColor: theme.palette.white,
    borderRadius: 10,
    marginBottom: theme.spacing.sm,
  },
  serviceImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  serviceName: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
    color: theme.palette.black,
  },
  popularContainer: {
    padding: theme.spacing.sm,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
  },
  popularHeaderText: {
    fontSize: theme.fontSize.md,
    color: theme.palette.black,
    fontWeight: 'bold',
  },
  popularBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularItem: {
    padding: theme.spacing.sm,
    backgroundColor: theme.palette.white,
    borderRadius: 10,
    marginBottom: theme.spacing.sm,
  },
  popularImage: {
    width: 300,
    height: 250,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  popularInfo: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xs,
  },
  popularName: {
    fontSize: theme.fontSize.md,
    color: theme.palette.black,
    fontWeight: 'bold',
  },
  popularLocation: {
    fontSize: theme.fontSize.sm,
    color: theme.palette.black,
  },
  popularItemContainer: {
    marginRight: theme.spacing.sm,
  },
  bestOffers: {
    padding: theme.spacing.sm,
  },
  bestOffersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
  },
  bestOffersHeaderText: {
    fontSize: theme.fontSize.md,
    color: theme.palette.black,
    fontWeight: 'bold',
  },
  bestOffersBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bestOffersItem: {
    padding: theme.spacing.sm,
    backgroundColor: theme.palette.white,
    borderRadius: 10,
    marginBottom: theme.spacing.sm,
  },
  bestOffersImage: {
    width: 300,
    height: 250,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  bestOffersInfo: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xs,
  },
  bestOffersName: {
    fontSize: theme.fontSize.md,
    color: theme.palette.black,
    fontWeight: 'bold',
  },
  bestOffersLocation: {
    fontSize: theme.fontSize.sm,
    color: theme.palette.black,
  },
  offerDiscountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xs,
    backgroundColor: theme.palette.white,
    borderRadius: 10,
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 0,
    width: 100,
    margin: theme.spacing.sm,
    zIndex: 9999,
  },
  offerDiscountText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});
