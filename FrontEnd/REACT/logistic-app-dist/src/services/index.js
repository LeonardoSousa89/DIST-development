import { db, auth } from './db'

import { addDoc, collection } from 'firebase/firestore';

import { toast } from 'react-toastify';

import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword, 
         signInWithPopup, 
         signOut } from 'firebase/auth'


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
            .catch(e=> toast.error(e.code))
        })
        
    }


export async function signUp(name, auth, email, password,  navigation){
    await createUserWithEmailAndPassword(auth, email, password)
        .then(response=>{
            _data(name, email)

            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid))

            navigation()

        }).catch((e)=>{
            toast.error(e.code)
        })
}

export async function signInWithEmailAndPass(auth, email, password, navigation){
    await signInWithEmailAndPassword(auth, email, password)
        .then((response)=>{

            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid))
            
            navigation(response.user.uid)

        }).catch((e)=>{
            toast.error(e.code)
        })
}

export function signInWithProvider(auth, provider, providerNavigation){
    signInWithPopup(auth,provider)
        .then(response=>{
            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid)) 
            
            providerNavigation(response.user.uid)
        })
        .catch((e)=>toast.error(e.code))
}

export function createUserWithProvider(auth, provider, providerNavigation){
    signInWithPopup(auth,provider)
        .then(response=>{

             let name=response.user.displayName
             let email=response.user.email

            _data(name, email)

            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid)) 
            
            providerNavigation(response.user.uid)

        })
        .catch((e)=>toast.error(e.code))
}


export async function logOut(auth, navigation){
    signOut(auth).then(()=>{
        localStorage.removeItem("Admin")
        localStorage.removeItem("ID")

        navigation()
        }).catch(e=>{
            toast.error(e.code)
        })
}