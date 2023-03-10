import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { StyleSheet, View } from 'react-native';

import _dist from '../pages/animation-dist-page';
import Login  from '../pages/login'
import signUp from '../pages/signUp'
import admin from '../pages/admin';
import insert_worker from '../pages/insert-worker';
import list_workers from '../pages/list-worker';

const Stack=createNativeStackNavigator()

export default (props)=>{

    return(
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='dist'
                                    screenOptions={{headerShown: false}}>
                    <Stack.Screen name='dist'   component={_dist} />
                    <Stack.Screen name='login'  component={Login} />
                    <Stack.Screen name='signUp' options={{headerShown: true, title:""}} component={signUp} />
                    <Stack.Screen name='admin'  options={{headerShown: false, title:""}} component={admin} />
                    <Stack.Screen name='insert_worker'  options={{headerShown: false, title:""}} component={insert_worker} />
                    <Stack.Screen name='list_workers'  options={{headerShown: false, title:""}} component={list_workers} />
                </Stack.Navigator>
            </NavigationContainer>
         </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
    }
})

