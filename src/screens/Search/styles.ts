import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

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
        margin: theme.spacing.sm,
        gap: theme.spacing.sm,
    },
    headerText: {
        fontSize: 16,
        color: theme.palette.black
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
    }

});