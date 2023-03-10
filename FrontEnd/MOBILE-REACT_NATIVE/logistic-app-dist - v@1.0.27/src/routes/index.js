import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { StyleSheet, View } from 'react-native';

import _dist from '../pages/animation-dist-page';
import Login  from '../pages/login'
import signUp from '../pages/signUp'
import admin from '../pages/admin';

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
                    <Stack.Screen name='admin'  options={{headerShown: true, title:""}} component={admin} />
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

