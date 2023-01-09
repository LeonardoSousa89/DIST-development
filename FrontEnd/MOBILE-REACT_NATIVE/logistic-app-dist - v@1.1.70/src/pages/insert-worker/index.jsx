import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default (props) =>{

  function back(){
    props.navigation.navigate("admin")
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
                    <Text style={styles.textName}>Rachel Weisz</Text>
                    <Text style={styles.textEmail}>Rachelhollywood@gmail.com</Text>
                  </View>
              </View>

            </View>

            <View style={styles.formWorker}>
                <Text>insert workers page</Text>

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
      height: 800,
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
      fontSize: 30,
      fontWeight: 'bold'
  },textEmail:{
      fontSize: 14,
      fontWeight: 'bold'
  },formWorker:{
      flex: 4,
      padding: 20,
      justifyContent:'space-between'
  },btn_back:{
    
  }
});
