//Google PROJECT
//https://console.cloud.google.com/apis/credentials/oauthclient/365784033172-3b302v2n25aipa5e80mn5ce0rh36isho.apps.googleusercontent.com?project=dist-4c895

//expo DOC
//https://docs.expo.dev/guides/authentication/#google
//https://docs.expo.dev/versions/v45.0.0/sdk/google-sign-in/

//urls de instalação

/**
 * https://www.npmjs.com/package/expo-auth-session
 * https://www.npmjs.com/package/expo-web-browser
 * 
 * 
 *falta instalar este mas por causa da versão do NODE não é possível:
 *  expo install expo-auth-session expo-random
 * 
 */

import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import { GoogleSocialButton } from "react-native-social-buttons";

import Header from '../../components/header';
import Footer from '../../components/footer';

import { signUp, createUserWithProvider } from '../../services'
import { auth, db } from '../../services/db'

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

//problemas com a instalação de todos os pacotes para autenticação com o google por conta da versão do node

/*
import * as WebBrowser from 'expo-web-browser';


import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();
*/
export default (props) =>{
  
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  useEffect(()=>{},[])

  useEffect(()=>{},[name, email, password])


    // const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
  //   {
  //     clientId: '365784033172-3b302v2n25aipa5e80mn5ce0rh36isho.apps.googleusercontent.com',
  //   },
  // );

  // useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { id_token } = response.params;
  //     const auth = getAuth();
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(auth, credential);

  //     props.navigation.navigate("admin")
  //   }else{
  //     alert("there's an error witrh your auth")
  //   }
  // }, [response]);

  return (
    <ScrollView>
      <View style={styles.container}>
        
        <Header />  
        <Image source={require('../../../assets/SignUp.png')} />

        <View style={styles.internalContainer}>

            <TextInput placeholder='name'
                      color='#2196f3'
                      value={name}
                      onChangeText={(e)=>{setName(e)}}/> 

            <TextInput placeholder='email'
                      color='#2196f3'
                      value={email}
                      onChangeText={(e)=>{setEmail(e)}}/> 

            <TextInput placeholder='password'
                      color='#2196f3'
                      secureTextEntry
                      value={password}
                      onChangeText={(e)=>{setPassword(e)}}/> 


          <Button style={styles.btn}
                  title="send" 
                  color='#2976E6'
                  trailing={props => <Icon name="send" {...props} />} 
                  onPress={()=>signUp(name, auth, email, password, props)}
                  />
          
          <View style={styles.textMessage}>
            <Text style={styles.message}>or</Text>
          </View>

        </View>

        <GoogleSocialButton 
          buttonViewStyle={{width: '80%', height: 50, justifyContent: 'center', marginTop: -60}}  
          onPress={()=>{alert('fazer downgrade do node16 para o 14 ou 15')}}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor: 'whitesmoke',
      width:'100%',
      height:800,
  },text:{
      color:'white',
  },internalContainer:{
      width:'80%',
      height:'40%',
  },btn:{
      marginTop:'5%',
      height:50,
      justifyContent:'center'
  },footerText:{
      width:'100%',
      textAlign:'center',
      marginTop:15,
      color:'#2976E6',
  },textMessage:{
      width:'100%',
      marginTop:'5%',
      height:100,
      alignItems:'center',
      backgroundColor: 'whitesmoke',
      marginBottom:30,
  },message:{
      fontWeight:'bold',
      fontSize:15,
      marginBottom:10,
  },messageWith:{
      fontSize:20,
      fontWeight:'bold',
  },footer:{
      alignItems:'center',
      width:'100%',
      height:150,
      backgroundColor:'whitesmoke',
      marginTop:85,
  },arrow:{
      backgroundColor:'whitesmoke',
      justifyContent:'flex-end',
      width:'100%',
      height:'10%',
  },arrIcon:{
      marginLeft:20,
      width:'10%',
  },internButton:{
      width:100,
      marginLeft:20,
      color:'whitesmoke'
  }
});
