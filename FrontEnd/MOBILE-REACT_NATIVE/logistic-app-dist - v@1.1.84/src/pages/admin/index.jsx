import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import { getProfileData, logOut, profileImage } from '../../services'
import { auth, db } from '../../services/db'

import * as ImagePicker from 'expo-image-picker';

/**images from test */
import Rachel from '../../../assets/Rachel.png'
import Google from '../../../assets/google.png'
import Facebook from '../../../assets/facebook.png'
import Foto from '../../../assets/foto.jpg'
import Geo from '../../../assets/geography.png'
import Mochileira from '../../../assets/mochileira-viagem.jpg'
import Airplane from '../../../assets/airplane.png'
import Workers from '../../../assets/workers.png'
/**images from test */

export default (props) =>{

   const [username,  setUsername]=useState('')
   const [userEmail, setUserEmail]=useState('')  
   const [image, setImage]=useState('') 

  
  useEffect(()=>{

    getProfileData(setUsername, setUserEmail)
  
  }, [image])

  function pageInsertWorker(){
    props.navigation.navigate("insert_worker")
  }

  function pageListWorkers(){
    props.navigation.navigate("list_workers")
  }

  function pageLogin(){
    logOut(auth, props)
  }

  /**o upload envia as fotos corretamente mas há um erro ao renderizar a imagem */
  function changeProfilePhoto(){
      profileImage(ImagePicker, setImage)
  }


  return (

        <ScrollView>
          
          <View style={styles.container}>
           
            <View style={styles.internalHeader}> 
              
              <View style={styles.logoContainer}>
                  <Image style={styles.logoIcon} source={require('../../../assets/dist-icon.png')} />
                  <Image style={styles.logoText} source={require('../../../assets/DIST.png')} />
              </View>
            
              <View style={styles.profileContainer}> 
                  
                  <View style={styles.profilePhotoContainer}>
                    <View style={styles.clientPhoto} > 
                      <Pressable
                        onPress={changeProfilePhoto}
                      >
                        { image ? (<Image source={image} />) : (<Image source={require('../../../assets/camera.png')} /> )}
                      
                      </Pressable>
                    </View>
                  </View>
                  
                  <View style={styles.userData}>
                    <Text style={styles.textName}>{username}</Text>
                    <Text style={styles.textEmail}>{userEmail}</Text>
                  </View>
              </View>

            </View>




            <View style={styles.card}>
             
              <Pressable
                onPress={pageInsertWorker}
              >
                  <Image style={styles.cardWorker} source={require('../../../assets/card-worker.png')}  />
              </Pressable>
             
             <Pressable
               onPress={pageListWorkers} 
             >
              <Image style={styles.listWorker} 
                      source={require('../../../assets/workers-list-btn.png')}
                        />
             </Pressable>
             
             <Pressable
               onPress={pageLogin} 
             >
              <Image style={styles.btn_logout} 
                      source={require('../../../assets/btn-logout.png')}
                        />
             </Pressable>

            </View>

          </View>

        </ScrollView>
  
    );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: 'whitesmoke',
      width:'100%',
      height: 750,
      alignItems: 'center',
  },internalHeader:{
      width:'100%',
      flex: 3,
  },logoContainer:{
      flexDirection:'row',
      padding: 20,
      justifyContent:'space-between',
  },logoIcon:{
      height:100,
      width: 100,
      marginTop:30,
  },logoText:{
      marginTop:40,
      marginRight:'20%'
  },profileContainer:{
      backgroundColor:'#2976E61A',
      flex:1,
      flexDirection: 'row'
  },profilePhotoContainer:{
      flex: 1,
  },clientPhoto:{
      height: 120,
      width:  120,
      marginLeft: 10,
      top: -10,
      borderRadius:100,
      position: 'absolute',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      backgroundColor: 'rgba(0,0,0,0.8)'
  },userData:{
      flex: 2,
      alignItems: 'center',
  },textName:{
      marginTop: 20,
      fontSize: 25,
      marginBottom: 5,
      fontWeight: 'bold'
  },textEmail:{
      fontSize: 14,
      fontWeight: 'bold'
  },card:{
      flex: 4,
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
  },cardWorker:{
      marginBottom: 20,
  },btn_logout:{
      marginTop: 100,
      marginLeft: 300
  }
});
