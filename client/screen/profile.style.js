import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    cover:{
        height: 220,
        width: "100%",
        resizeMode: "cover"
    },
    profileContainer:{
        flex: 1,
        alignItems: "center"
    },
    profile:{
        height: 135,
        width: 135,
        borderRadius: 999,
        borderColor: COLORS.primary,
        borderWidth: 2,
        resizeMode: 'cover',
        marginTop: -90
    },
    name:{
        fontFamily: "bold",
        color: COLORS.primary,
        marginVertical: 5
    },
    loginBtn:{
        backgroundColor: COLORS.secondary,
        padding: 2,
        borderWidth: 0.4,
        borderColor: COLORS.primary,
        borderRadius: SIZES.xxLarge
    },
    menuText:{
        fontFamily: "regular",
        color: COLORS.gray,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 26
    },
    menuWrapper:{
        marginTop: SIZES.xLarge,
        width: SIZES.width - SIZES.large,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12
    },
    menuItem:{
        borderBottomWidth: 0.8,
        borderColor: COLORS.gray,
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 15,
    }
})

export default styles;