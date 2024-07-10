import { StyleSheet } from 'react-native'
import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: theme.borderRadius.sm,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: theme.spacing.md,
        height: 50
    },
    disabledButtonContainer: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: theme.borderRadius.sm,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: theme.spacing.md,
        height: 50
    },
    buttonText: {
        color: theme.palette.white,
        textAlign: 'center',
        fontSize: theme.fontSize.md,
        fontFamily: theme.fontFamily.bold,
    },
    icon: {
        marginLeft: theme.spacing.sm
    }
});