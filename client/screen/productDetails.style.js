import { StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: SIZES.xxLarge,
        zIndex: 999,
        width: SIZES.width - 44
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    cartRow: {
        paddingBottom: SIZES.medium,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width,
        paddingRight: 12
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.medium,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 44,
        top: 10
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 10,
        top: 5
    },
    title: {
        fontFamily: 'bold',
        fontSize: SIZES.large,

    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: SIZES.large
    },
    ratingText: {
        color: COLORS.gray,
        fontFamily: 'medium',
        paddingHorizontal: 10,
        paddingTop: 5
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: 'center'
    },
    price: {
        fontFamily: 'semibold',
        fontSize: SIZES.large,
        paddingHorizontal: 5,
        top: 2
    },
    descriptionWraper:{
        marginTop: SIZES.small,
        marginHorizontal: SIZES.large
    },
    description: {
        fontFamily: 'medium',
        fontSize: SIZES.large-2
    },
    descText: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        textAlign: 'justify',
        marginBottom: SIZES.small
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: SIZES.large,
        marginHorizontal: 12
    },
    cartBtn: {
        width: SIZES.width*0.7,
        backgroundColor: COLORS.black,
        padding: 5,
        borderRadius: SIZES.large,
        marginLeft: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartTitle: {
        fontFamily: 'semibold',
        fontSize: SIZES.medium,
        color: COLORS.lightWhite
    },
    addCart: {
        width: 37,
        height: 37,
        borderRadius: 50,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default styles;