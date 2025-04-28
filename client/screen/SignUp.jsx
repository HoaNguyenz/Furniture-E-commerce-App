import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Image, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import { BackBtn, Button } from '../components';
import styles from './loginPage.style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constants';
import axios from 'axios';


const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  location: Yup.string().min(3,'Provide a valid location').required('Required'),
  username: Yup.string().min(3,'Provide a valid username').required('Required')
})


const SignUp = ({navigation}) => {
    const [loader, setLoader] = useState(false);
    const [obsecureText, setObsecureText] = useState(false);
    const [error, setError] = useState({});
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const inValidForm = ()=>{
        Alert.alert(
        "Invalid Form", 
        "Please provide all required fields",
        [
            {defaultIndex: 1}
        ]
        )
    }

    const registerUser = async(values)=>{
      setLoader(true);

      try {
        const endpoint = 'http://localhost:3000/api/register'
        const data = values

        const response = await axios.post(endpoint, data)

        if(response.status === 201){
          navigation.replace('Login')
        }
      } catch (error) {
        console.log(error)
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
            initialValues={{username:"", email: "", password: "", location:""}}
            validationSchema={validationSchema}
            onSubmit={(values)=>registerUser(values)}
          >

            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldTouched, touched }) => (
              <View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Username</Text>
                  <View style={styles.inputWrapper(touched.username ? 'lightblue' : COLORS.primary)}>
                    <MaterialCommunityIcons
                      name='face-man-profile'
                      size={20}
                      color={COLORS.primary}
                      style={styles.iconStyle}
                    ></MaterialCommunityIcons>

                    <TextInput
                      placeholder='Enter your username'
                      onFocus={()=>{setFieldTouched('username')}}
                      onBlur={()=>{setFieldTouched('username', '')}}
                      value={values.username}
                      onChangeText={handleChange('username')}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{flex: 1, marginLeft: 10}}
                    ></TextInput>
                  </View>
                  {touched.username && errors.username && (
                    <Text style={styles.errorMess}>{errors.username}</Text>
                  )}
                </View>

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

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Location</Text>
                  <View style={styles.inputWrapper(touched.location ? 'lightblue' : COLORS.primary)}>
                    <Ionicons
                      name='location-outline'
                      size={20}
                      color={COLORS.primary}
                      style={styles.iconStyle}
                    ></Ionicons>

                    <TextInput
                      placeholder='Enter your location'
                      onFocus={()=>{setFieldTouched('location')}}
                      onBlur={()=>{setFieldTouched('location', '')}}
                      value={values.location}
                      onChangeText={handleChange('location')}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{flex: 1, marginLeft: 10}}
                    ></TextInput>
                  </View>
                  {touched.location && errors.location && (
                    <Text style={styles.errorMess}>{errors.location}</Text>
                  )}
                </View>
                <Button title={"SIGNUP"} onPress={isValid ? handleSubmit: inValidForm} isValid={isValid} loader={loader}></Button>

                <Text style={styles.registration} onPress={()=>{navigation.navigate('SignUp')}}>Register</Text>
              </View>
            )}
          </Formik>




          
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default SignUp
