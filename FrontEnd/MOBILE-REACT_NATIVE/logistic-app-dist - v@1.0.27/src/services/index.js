import { db, auth } from './db'

import { addDoc, collection } from 'firebase/firestore';

import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword, 
         signInWithPopup, 
         FacebookAuthProvider, 
         GoogleAuthProvider, 
         signOut } from 'firebase/auth'

 /**implementar por último */
export async function googleAuthProvider(){
    let provider=new GoogleAuthProvider()
    await signIn(provider)
}

 /**implementar por último */
export async function facebookAuthProvider(){
    let provider=FacebookAuthProvider()
    await signIn(provider)
}

function _data(name, email){

    auth.currentUser.getIdTokenResult(true)
        .then(e=>{

            let _AuthTime=e.authTime
            let _Token=e.token
            let _SignProvider=e.signInProvider
            let _ExpTime=e.expirationTime
            let ID=auth.currentUser.uid

            addDoc(collection(db,"User"),{
                ID,
                name,
                email, 
                _AuthTime, 
                _SignProvider,
                _Token,
                _ExpTime
            })
            .catch(e=>console.warn(e))
        })
        
    }


export async function signUp(name, auth, email, password, props){
    await createUserWithEmailAndPassword(auth, email, password)
        .then(response=>{
            _data(name, email)
            props.navigation.navigate("login")
        }).catch((e)=>{
            console.warn(e)
        })
}

export async function signInWithEmailAndPass(auth, email, password, props){
    await signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            props.navigation.navigate("admin")
        }).catch((e)=>{
            console.warn(e)
        })
}

export function signInWithProvider(provider){
    signInWithPopup(provider).then((response)=>[
        console.warn(response)
    ]).catch((e)=>{
        console.warn(e)
    })
}

export async function logOut(){

}
