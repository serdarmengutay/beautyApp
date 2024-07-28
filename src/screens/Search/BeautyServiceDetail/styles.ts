import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  imageBackground: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    paddingVertical: theme.spacing.xl,
    backgroundColor: theme.palette.black,
  },
  imageBackgroundHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  locationContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: theme.palette.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerPlaceholder: {
    width: 22,
  },
  imageBackgroundTitleContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
  imageBackgroundTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: theme.palette.white,
    padding: 20,
    flexWrap: 'wrap',
  },
  contentContainer: {
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
  shopContainer: {
    padding: theme.spacing.sm,
  },
  shopFieldTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
