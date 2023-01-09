import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default (props) =>{
  
  return (

        <View style={styles.container}>
            <Text>ADMIN</Text>
        </View>
  
    );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor: 'whitesmoke',
      width:'100%',
  }
});
