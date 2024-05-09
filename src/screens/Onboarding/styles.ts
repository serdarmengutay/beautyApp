import { StyleSheet } from "react-native";
import { Height, Width } from "../../constants/dimensions";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
    backgroundImageStyles: {
        height: Height, 
        width: Width, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: theme.palette.softWhite,
        fontWeight: 'bold',
        fontSize: theme.fontSize.xl,
      },
      titleContainer: {
        marginTop: Height * 0.2,
        height: Height * 0.25,
        paddingHorizontal: 10,
        alignItems: 'center',
      },
      subtitle: {
        color: theme.palette.white,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
      },
      indicator: {
        height: 10,
        width: 10,
        backgroundColor: 'gray',
        marginHorizontal: 3,
        borderRadius: 10,
      },
      btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: theme.palette.white,
        justifyContent: 'center',
        alignItems: 'center',
      },
});