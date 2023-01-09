import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Touchable, TouchableOpacity, FlatList } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


import { getProfileData, getWorkersData, pagination } from '../../services'
import { auth, db } from '../../services/db'

import { API_URL } from '../../../.env.json'

export default (props) =>{

    
    const [username, setUsername]=useState('')
    const [userEmail, setUserEmail]=useState('')  

    const [search, setSearch]=useState(null) 
    const [data, setData]=useState([])  
    const [page, setPage]=useState(0) 

    useEffect(()=>{

        getProfileData(setUsername, setUserEmail)
        getWorkersData(setData)

      },[search])

    function back(){
        props.navigation.navigate("admin")
    }
    
    function previewBtn(){
        /**
         * você deve criar a variável para acumular e atualizar,
         * o estado em tempo real, refletindo as mudanças, na tela,
         * se utilizar a variável page diretamente ocorrerá erros na
         * renderização do componente e haverá um comportamento inesperado
         * ao refletir as mudanças de estado.
         * 
         */
        let _PAGINATION=page
        _PAGINATION-=1
        setPage(_PAGINATION)
        
        if(page === 0 || page < 0){
            setPage(0)
        }

        pagination(setData, _PAGINATION)
    }

    function nextBtn(){
        let _PAGINATION=page
        _PAGINATION+=1
        setPage(_PAGINATION)
        pagination(setData, _PAGINATION)
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
  
              <View style={styles.listWorker}>
                  
                <View>
                    <TextInput style={styles.field} 
                                variant='outlined'
                                placeholder='Search'
                                color='#2196f3'
                                value={search}
                                onChangeText={(e)=>{setSearch(e)}}
                            /> 


                    { data.map(e=>{
                            return(
                                <View key={e.workerId}>
                                    <Text style={styles.name}>{e.workerName}</Text>
                                </View>
                            )
                    })}
                </View>

                <View style={styles.pagination}>
                
                    <Pressable
                        onPress={previewBtn}
                    >
                        <Image style={styles.preview} source={require('../../../assets/preview.png')} />
                    </Pressable>

                    <Pressable
                        onPress={nextBtn}
                    >
                        <Image style={styles.next} source={require('../../../assets/next.png')} />
                    </Pressable>

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
        height: 850,
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
        fontSize: 25,
        marginBottom: 5,
        fontWeight: 'bold'
    },textEmail:{
        fontSize: 14,
        fontWeight: 'bold'
    },listWorker:{
        flex: 4,
        // backgroundColor: 'red',
        padding: 20,
        justifyContent:'space-evenly',
        width:'90%',
        marginTop:50,
    },field:{
        borderRadius:'12'
    },name:{
        backgroundColor: 'white',
        borderStyle:'solid',
        borderColor: 'black',
        borderWidth:0.5,
        padding: 5
    },pagination:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
  });
  