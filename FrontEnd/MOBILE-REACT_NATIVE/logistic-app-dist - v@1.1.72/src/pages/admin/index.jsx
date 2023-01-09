import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import { getProfileData, logOut } from '../../services'
import { auth, db } from '../../services/db'


export default (props) =>{

   const [username,  setUsername]=useState('')
   const [userEmail, setUserEmail]=useState('')   

  function pageInsertWorker(){
    props.navigation.navigate("insert_worker")
  }

  function pageListWorkers(){
    props.navigation.navigate("list_workers")
  }

  function pageLogin(){
    logOut(auth, props)
  }

  useEffect(()=>{
  
    getProfileData(setUsername, setUserEmail)
  
  }, [])

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
                     <Image style={styles.clientPhoto} source={require('../../../assets/Rachel.png')} />
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
      marginTop:30,
  },profileContainer:{
      backgroundColor:'#2976E61A',
      flex:1,
      flexDirection: 'row'
  },profilePhotoContainer:{
      flex: 1
  },clientPhoto:{
      height: 120,
      width:  110,
      marginLeft: 20,
      top: -15,
      borderRadius:100,
      position: 'absolute',
  },userData:{
      // backgroundColor: 'blue',
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
      alignItems: 'center'
  },cardWorker:{
      marginBottom: 20,
  },btn_logout:{
      marginTop: 100,
      marginLeft: 350
  }
});
