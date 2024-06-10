import { StyleSheet } from 'react-native'
import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        marginVertical: theme.spacing.sm,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: theme.borderRadius.sm,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        fontSize: 16,
        height: 25
    },
    icon: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelStyle: {
        color: theme.colors.text,
        fontSize: theme.fontSize.sm,
        marginLeft: theme.spacing.sm,
        marginBottom: theme.spacing.xs,
    }
});