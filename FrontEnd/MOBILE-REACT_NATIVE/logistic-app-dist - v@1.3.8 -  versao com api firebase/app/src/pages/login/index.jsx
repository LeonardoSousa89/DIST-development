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

import { auth } from '../../services/db'; 
import { signInWithEmailAndPass, signInWithProvider } from '../../services';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Header from '../../components/header';
import Footer from '../../components/footer';

import { GoogleSocialButton } from "react-native-social-buttons";

//problemas com a instalação de todos os pacotes para autenticação com o google por conta da versão do node

/*
import * as WebBrowser from 'expo-web-browser';


import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();
*/
export default (props) =>{
  
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  useEffect(()=>{},[])

  useEffect(()=>{},[email, password])


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
        <Image source={require('../../../assets/Login.png')} />

        <View style={styles.internalContainer}>

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
                  title="login" 
                  color='#2976E6'
                  trailing={props => <Icon name="send" {...props} />} 
                  onPress={()=>signInWithEmailAndPass(auth, email, password, props)}
                  />
          
          <View style={styles.textMessage}>
            {/* <Text style={styles.message}>or</Text>
            <Text style={styles.messageWith}>SignIn with</Text>           */}
               <Text style={styles.link}
                  onPress={()=>props.navigation.navigate("signUp")
            }>do you haven't account? <Text style={styles.blue}>Create.</Text></Text>
          
          {/* <View style={styles.textMessage}>
            <Text style={styles.message}>or</Text>
          </View> */}

          </View>

        </View>
            
        {/* <GoogleSocialButton 
          buttonViewStyle={{width: '80%', height: 50, justifyContent: 'center'}}  
          onPress={()=>{alert("fazer downgrade do node16 para o 14 ou 15")}}
        /> */}
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
      height:650,
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
      height:60,
      alignItems:'center',
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
      backgroundColor:'whitesmoke'
  },blue:{
      color:'#2976E6',
  },link:{
      fontWeight:'bold',
  }
});
