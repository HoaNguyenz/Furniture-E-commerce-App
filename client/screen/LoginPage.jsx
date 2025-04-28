import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Image, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import { BackBtn, Button } from '../components';
import styles from './loginPage.style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { COLORS } from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
})

const LoginPage = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [obsecureText, setObsecureText] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState({});
  // const [input, setInput] = useState({
  //   email: '',
  //   password: ''
  // })
  const inValidForm = ()=>{
    Alert.alert(
      "Invalid Form", 
      "Please provide all required fields",
      [
        {defaultIndex: 1}
      ]
    )
  }

  const login = async(values)=>{
    setLoader(true);
    try {
      const endpoint = "http://192.168.100.7:3000/api/login"
      const data = values

      const response = await axios.post(endpoint, data)
      if(response.status === 200){
        setLoader(false)
        setResponseData(response.data)

        //console.log(`user${responseData._id}`)
        await AsyncStorage.setItem(`user${responseData._id}`, JSON.stringify(responseData))

        await AsyncStorage.setItem('id', JSON.stringify(responseData._id))
        navigation.replace('Bottom Navigation')
      }
      else{
        Alert.alert(
          "Error logging in", 
          "Please provide valid credentials",
          [
            {defaultIndex: 1}
          ]
        )
      }
    } catch (error) {
      Alert.alert(
        "Error", 
        "Oops there's an error, please try again with valid credentials",
        [
          {defaultIndex: 1}
        ]
      )
    }
    finally{
      setLoader(false)
    }
  }


  return (
    <ScrollView>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <View>
          <BackBtn onPress={()=>navigation.goBack()}></BackBtn>

          <Image
            source={require('../assets/images/bk.png')}
            style={styles.cover}
          ></Image>

          <Text style={styles.title}>
            Luxurious Furniture
          </Text>

          <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={validationSchema}
            onSubmit={(values)=>login(values)}
          >

            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldTouched, touched }) => (
              <View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View style={styles.inputWrapper(touched.email ? 'lightblue' : COLORS.primary)}>
                    <MaterialCommunityIcons
                      name='email-outline'
                      size={20}
                      color={COLORS.primary}
                      style={styles.iconStyle}
                    ></MaterialCommunityIcons>

                    <TextInput
                      placeholder='Enter your email'
                      onFocus={()=>{setFieldTouched('email')}}
                      onBlur={()=>{setFieldTouched('email', '')}}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{flex: 1, marginLeft: 10}}
                    ></TextInput>
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorMess}>{errors.email}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputWrapper(touched.password ? 'lightblue' : COLORS.primary)}>
                    <MaterialCommunityIcons
                      name='lock-outline'
                      size={20}
                      color={COLORS.primary}
                      style={styles.iconStyle}
                    ></MaterialCommunityIcons>

                    <TextInput
                      secureTextEntry={obsecureText}
                      placeholder='Enter your password'
                      onFocus={()=>{setFieldTouched('password')}}
                      onBlur={()=>{setFieldTouched('password', '')}}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{flex: 1, marginLeft: 10}}
                    ></TextInput>

                    <TouchableOpacity onPress={()=>{setObsecureText(!obsecureText)}}>
                      <MaterialCommunityIcons name={obsecureText? "eye-off-outline" : "eye-outline"} size={20}></MaterialCommunityIcons>
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorMess}>{errors.password}</Text>
                  )}
                </View>

                <Button 
                  title={"LOGIN"} 
                  onPress={isValid ? handleSubmit: inValidForm} 
                  isValid={isValid}
                  loader={loader}></Button>

                <Text style={styles.registration} onPress={()=>{navigation.navigate('SignUp')}}>Register</Text>
              </View>
            )}
          </Formik>

        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default LoginPage