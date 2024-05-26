import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    cover:{
        height: SIZES.height/2.4,
        width: SIZES.width - 50,
        resizeMode: 'contain',
        marginBottom: SIZES.xxLarge,
        top: 30
    },
    title:{
        fontFamily: "bold",
        fontSize: SIZES.large,
        color: COLORS.primary,
        alignItems: 'center',
        marginBottom: SIZES.small
    },
    wrapper:{
        marginBottom: 10,
    },
    label:{
        fontFamily: 'regular',
        fontSize: SIZES.xSmall,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: 'left'
    },
    inputWrapper: (borderColor)=>({
        borderColor: borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    }),
    errorMess:{
        color: 'red',
        fontFamily: 'regular',
        marginTop: 5,
        marginLeft: 5,
        fontSize: SIZES.xSmall
    },
    registration:{
        textAlign: 'center'
    }
})

export default styles;