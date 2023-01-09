import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import { logOut, insertWorker } from '../../services'
import { auth, db } from '../../services/db'

export default (props) =>{

  //pegue no datastore 
  const [username, setUsername]=useState('')
  const [userEmail, setUserEmail]=useState('')   

  const [workerName, setWorkerName]=useState(null)
  const [workerEmail, setWorkerEmail]=useState(null)
  const [workerPost, setWorkerPost]=useState(null)
  const [workerAddress, setWorkerAddress]=useState(null)
  const [workerPhoneNumber, setWorkerPhoneNumber]=useState(null)
  const [workerAge, setWorkerAge]=useState(null)

  useEffect(()=>{},[])

  useEffect(()=>{
    let currentUserName=auth.currentUser.displayName || auth.currentUser.uid 
    let currentUserEmail=auth.currentUser.email

    setUsername(currentUserName)
    setUserEmail(currentUserEmail)
  },[])

  function back(){
        logOut(auth, props)
  }

  function navigate(){
    props.navigation.navigate("list_workers")
  }
  
  function saveWorker(){
        let userId=auth.currentUser.uid
        insertWorker(workerName,workerEmail,workerPost,
                     workerAddress,workerPhoneNumber,workerAge,userId,navigate)
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
                     <Image style={styles.clientPhoto} source={require('../../../assets/Rachel.png')} />
                  </View>
                  
                  <View style={styles.userData}>
                    <Text style={styles.textName}>{username}</Text>
                    <Text style={styles.textEmail}>{userEmail}</Text>
                  </View>
              </View>

            </View>

            <View style={styles.formWorker}>
                
                <View style={styles.formArea}>
                    
                    <TextInput style={styles.field} 
                        placeholder='Name'
                        color='#2196f3'
                        value={workerName}
                        onChangeText={(e)=>{setWorkerName(e)}}
                    /> 

                    <TextInput style={styles.field} 
                        placeholder='Email'
                        color='#2196f3'
                        value={workerEmail}
                        onChangeText={(e)=>{setWorkerEmail(e)}}
                    /> 

                    <TextInput style={styles.field} 
                        placeholder='Post'
                        color='#2196f3'
                        value={workerPost}
                        onChangeText={(e)=>{setWorkerPost(e)}}
                    /> 

                    <TextInput style={styles.field} 
                        placeholder='Address'
                        color='#2196f3'
                        value={workerAddress}
                        onChangeText={(e)=>{setWorkerAddress(e)}}
                    /> 

                    <TextInput style={styles.field} 
                        placeholder='Phone number'
                        color='#2196f3'
                        value={workerPhoneNumber}
                        onChangeText={(e)=>{setWorkerPhoneNumber(e)}}
                    /> 

                    <TextInput style={styles.field} 
                        placeholder='Age'
                        color='#2196f3'
                        value={workerAge}
                        onChangeText={(e)=>{setWorkerAge(e)}}
                    /> 

                    <Button style={styles.btn}
                        title="save" 
                        color='#2976E6'
                        trailing={props => <Icon name="content-save" {...props} />} 
                        onPress={saveWorker}
                    />

                </View>

                <Pressable
                  onPress={back} 
                >
                    <Image style={styles.btn_back} 
                        source={require('../../../assets/Arrow.png')}
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
      alignItems: 'center',
      justifyContent:'center',
      width:'100%',
      height: 950,
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
      flex: 2,
      alignItems: 'center',
  },textName:{
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold'
  },textEmail:{
      fontSize: 14,
      fontWeight: 'bold'
  },formWorker:{
      flex: 5,
      padding: 20,
      justifyContent:'space-between',
      width:'90%',
      marginTop:50,
  },formArea:{
      height:400,
  },field:{
      marginBottom: 5
  },btn:{
      height: 50,
      justifyContent:'center',
  },btn_back:{
      top: -40
  }
});
