import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.colors.text,
        fontSize: theme.fontSize.md,
        fontFamily: theme.fontFamily.bold,
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: theme.spacing.sm,
        borderRadius: theme.borderRadius.sm,
    }
});