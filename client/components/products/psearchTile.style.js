import { StyleSheet } from 'react-native';
import {COLORS, SIZES, SHADOWS} from '../../constants/index'


const styles = StyleSheet.create({
    container:{
        top: 20,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.small,
        flexDirection: 'row',
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite,
    },
    image:{
        width: 80,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignContent: 'center'
    },
    productImg:{
        width: "100%",
        height: 75,
        borderRadius: SIZES.small,
        resizeMode: "cover"
    },
    textContainer:{
        flex: 1,
        marginHorizontal: SIZES.medium
    },
    productTitle:{
        fontSize: SIZES.medium,
        fontFamily: 'bold',
        color: COLORS.primary
    },
    supplier:{
        fontSize: SIZES.small+2,
        fontFamily: 'regular',
        color: COLORS.gray,
        marginTop: 3
    }
})

export default styles