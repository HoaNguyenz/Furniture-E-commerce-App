import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'


const Button = ({title, onPress, isValid, loader}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle(isValid === false ? COLORS.gray : COLORS.primary)}>
        {loader === false ? (
          <Text style={styles.btnTxt}>{title}</Text>
        ) : (
          <ActivityIndicator></ActivityIndicator>
        )}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnTxt:{
        fontFamily: 'bold',
        color: COLORS.white,
        fontSize: 18
    },
    btnStyle:(backgroundColor)=>({
        height: 50,
        width: '100%',
        marginVertical: 20,
        backgroundColor: backgroundColor,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    })
})