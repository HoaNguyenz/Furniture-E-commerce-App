import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'
import { fn1, fn2, fn3, fn4, fn5 } from '../../assets'

const Carousel = () => {
    const slides = [
        fn1, fn2, fn3, fn4, fn5
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor= { COLORS.primary }
        inactiveDotColor = { COLORS.secondary }
        ImageComponentStyle = {{borderRadius: 15, width: '93%', marginTop: 15}}
        autoplay
        circleLoop
      >

      </SliderBox>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})