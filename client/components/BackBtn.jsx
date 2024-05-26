import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'


const BackBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backbtn}>
        <Ionicons
            name='chevron-back-circle'
            size={40}
            color={COLORS.primary}
        ></Ionicons>
    </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({
    backbtn:{
        alignItems: 'center',
        position: 'absolute',
        zIndex: 999,
        top: 40
    }
})