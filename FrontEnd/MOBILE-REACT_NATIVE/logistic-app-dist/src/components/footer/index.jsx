import { TextInput,Button } from '@react-native-material/core';
import { StyleSheet, View, Text, Image } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect } from 'react';

export default (props) =>{

  useEffect(()=>{},[])
  
  return (
    <>
        <View style={styles.container}>
            <Image style={styles.face} source={require('../../../assets/facebook.png')} />
            <Image source={require('../../../assets/google.png')} />
        </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor: 'whitesmoke',
        width:'100%',
        marginBottom:20
  },text:{
        color:'black',
  },face:{
        marginRight:20,
  }
});
