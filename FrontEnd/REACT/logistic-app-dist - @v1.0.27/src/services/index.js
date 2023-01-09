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
            console.log(e.code)

            switch (e.code){
                case 'auth/email-already-in-use':
                    toast.error('Email already exist')
                break 
                case 'auth/missing-email':
                    toast.error("Email field can't be empty")
                break 
                case 'auth/invalid-email':
                    toast.error("Invalid email")
                break 
                case 'auth/weak-password':
                    toast.error("Password minimun 6 characters")
                break 
                case 'auth/internal-error':
                    toast.error("Password field can't be empty")
                break 
            }
        })
}


export function createUserWithProvider(auth, provider, providerNavigation){
    signInWithPopup(auth,provider)
        .then(response=>{

             let name=response.user.displayName
             let email=response.user.email

            _data(name, email)

            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid)) 
            
            providerNavigation()

        })
        .catch((e)=>{
            console.log(e.code)

            switch (e.code){
                case 'auth/popup-closed-by-user':
                    toast.error('Do you need agree the terms')
                break 
                case 'auth/popup-blocked':
                    toast.error('Pop-up blocked by browser')
                break 
                case 'auth/cancelled-popup-request':
                    toast.error('Request canceled by pop-up blocked')
                break 
                case 'auth/account-exists-with-different-credential':
                    toast.error('Email already exist')
                break 
            }
        })
}


export async function signInWithEmailAndPass(auth, email, password, navigation){
    await signInWithEmailAndPassword(auth, email, password)
        .then((response)=>{

            let msg="Welcome to admin page."
            localStorage.setItem("MSG", JSON.stringify(msg))
            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid))
            
            navigation(response.user.uid)

        }).catch((e)=>{
            console.log(e.code)

            switch (e.code){
                case 'auth/user-not-found':
                    toast.error('User not found')
                break
                case 'auth/wrong-password':
                    toast.error('Incorrect password')
                break
                case 'auth/invalid-email':
                    toast.error("Email field can't be empty")
                break
                case 'auth/internal-error':
                    toast.error("password field can't be empty")
                break
            }
        })
}


export function signInWithProvider(auth, provider, providerNavigation){
    signInWithPopup(auth,provider)
        .then(response=>{

            let msg="Welcome to admin page."
            localStorage.setItem("MSG", JSON.stringify(msg))
            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid)) 
            
            providerNavigation(response.user.uid)
        })
        .catch((e)=>{
            console.log(e.code)
            switch (e.code){
                case 'auth/popup-closed-by-user':
                    toast.error('Do you need agree the terms')
                break 
                case 'auth/popup-blocked':
                    toast.error('Pop-up blocked by browser')
                break 
                case 'auth/cancelled-popup-request':
                    toast.error('Request canceled by pop-up blocked')
                break 
                case 'auth/account-exists-with-different-credential':
                    toast.error('Email already exist')
                break 
                case 'auth/invalid-credential':
                    toast.error('Error to validate your credentials')
                break 
                
            }

        })
}


export async function logOut(auth, navigation){
    signOut(auth).then(()=>{
        localStorage.removeItem("Admin")
        localStorage.removeItem("ID")
        localStorage.removeItem("MSG")

        navigation()
        }).catch(e=>{
           toast.error(e)
        })
}


export async function USER(){
    let msg=localStorage.getItem("MSG")
    toast.info(msg)
}


export async function protectRoute(navigation){
    let admin=localStorage.getItem("Admin")
    let id=localStorage.getItem("ID")

    if(!admin && !id){
        navigation()
    }
}


export async function verifyRoute(){
 let deniedStorageRouteSignUp1='http://localhost:3000/'
 let deniedStorageRouteSignUp2='http://localhost:3000/signup' 
 let deniedStorageRouteLogin='http://localhost:3000/login'
 
 let currentURL=window.location.href
 
 console.log(currentURL)

    if( currentURL===deniedStorageRouteSignUp1 || 
        currentURL===deniedStorageRouteSignUp2 ||
        currentURL===deniedStorageRouteLogin  ){
        
        localStorage.removeItem("Admin")
        localStorage.removeItem("ID")
        localStorage.removeItem("MSG")
    }
}

/**
 * A autenticação pelo facebook só está permitindo
 * a conta com app ou melhor a conta de criação
 * do app, fazer login, ou seja só posso logar com a minha
 * conta de criação do app no meu APP.
 * 
 * verificar isso.
 * 
 */