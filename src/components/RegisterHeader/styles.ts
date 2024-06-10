import { StyleSheet } from 'react-native'
import { Height } from '../../constants/dimensions'
import { theme } from '../../constants/theme'

export const styles = StyleSheet.create({
    container: {
        height: Height  * 0.3,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
    },
    textContainer: {
        marginHorizontal: theme.spacing.md,
        marginTop: Height * 0.1,
    },
    title: {
        color: theme.palette.white,
        fontSize: 36,
        fontWeight: 'bold',
    },
    text: {
        color: theme.palette.white,
        fontSize: theme.fontSize.sm,
        marginTop: theme.spacing.sm,
    },
    loginText: {
        color: theme.palette.white,
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationColor: theme.palette.white,
        textDecorationLine: 'underline',
    },
})