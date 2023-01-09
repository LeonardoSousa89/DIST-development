import { db, auth } from './db'

import { API_URL } from '../../.env.json'

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


export async function signUp(username, auth, email, password, props){
    await createUserWithEmailAndPassword(auth, email, password)
        .then(response=>{

            _data(username, email)

            //spring API creation user
            let URL=`${API_URL}/user-account/administration`

            let data={userId: response.user.uid, userName: username , email}
  
            let config={ method: 'POST', 
                body: JSON.stringify(data),
                headers:{
                    'Content-type':'application/json'
                }
            }

            fetch(URL, config)
            .then(response=>{
                
                //all ok the firebase backend will send data to spring API 
                response.json()

                //all ok navigate to insert page
                props.navigation.navigate("login")
            })

        }).catch((e)=>{
            switch (e.code){
                case 'auth/email-already-in-use':
                    alert('Email already exist')
                break 
                case 'auth/missing-email':
                    alert("Email field can't be empty")
                break 
                case 'auth/invalid-email':
                    alert("Invalid email")
                break 
                case 'auth/weak-password':
                    alert("Password minimun 6 characters")
                break 
                case 'auth/internal-error':
                    alert("Password field can't be empty")
                break 
            }
        })
}

export async function createUserWithProvider(auth, provider, props){
    await signInWithPopup(auth,provider)
        .then(response=>{

             let username=response.user.displayName
             let email=response.user.email

            _data(username, email)
            
             //spring API creation user
             let URL=`${API_URL}/user-account/administration`

             let data={userId: response.user.uid, userName: username , email}
   
             let config={ method: 'POST', 
                 body: JSON.stringify(data),
                 headers:{
                     'Content-type':'application/json'
                 }
             }
 
             fetch(URL, config)
             .then(response=>{
                 
                 //all ok the firebase backend will send data to spring API 
                 response.json()
 
                 //all ok navigate to insert page
                 props.navigation.navigate("admin")
             })

        })
        .catch((e)=>{
            console.log(e.code)

            switch (e.code){
                case 'auth/popup-closed-by-user':
                    alert('Do you need agree the terms')
                break 
                case 'auth/popup-blocked':
                    alert('Pop-up blocked by browser')
                break 
                case 'auth/cancelled-popup-request':
                    alert('Request canceled by pop-up blocked')
                break 
                case 'auth/account-exists-with-different-credential':
                    alert('Email already exist')
                break 
            }
        })
}

export async function signInWithEmailAndPass(auth, email, password, props){
    await signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            props.navigation.navigate("admin")
        }).catch((e)=>{
            
            switch (e.code){
                case 'auth/user-not-found':
                    alert('User not found')
                break
                case 'auth/wrong-password':
                    alert('Incorrect password')
                break
                case 'auth/invalid-email':
                    alert("Email field can't be empty")
                break
                case 'auth/internal-error':
                    alert("password field can't be empty")
                break
            }
        })
}

export async function signInWithProvider(auth, provider, props){
    await signInWithPopup(auth,provider)
        .then(response=>{
            
            let userId=response.user.uid
            props.navigation.navigate("admin")

        })
        .catch((e)=>{
            console.log(e.code)
            switch (e.code){
                case 'auth/popup-closed-by-user':
                    alert('Do you need agree the terms')
                break 
                case 'auth/popup-blocked':
                    alert('Pop-up blocked by browser')
                break 
                case 'auth/cancelled-popup-request':
                    alert('Request canceled by pop-up blocked')
                break 
                case 'auth/account-exists-with-different-credential':
                    alert('Email already exist')
                break 
                case 'auth/invalid-credential':
                    alert('Error to validate your credentials')
                break 
                
            }

        })
}

export async function logOut(auth, props){
    await signOut(auth)
        .then(_=>{
            props.navigation.navigate("login")
        })
        .catch(e=>{
            alert('ERROR:' + e)
        })
}

export async function insertWorker(workerName,
                                   workerEmail,
                                   workerPost,
                                   workerAddress,
                                   workerPhoneNumber,
                                   workerAge,
                                   userId,
                                   navigate){


    let URL=`${API_URL}/administration`

    const data={workerName,
                workerEmail,
                workerPost,
                workerAddress,
                workerPhoneNumber,
                workerAge,
                admin:{userId}}  
                
    let config={ method: 'POST', 
                body: JSON.stringify(data),
                headers:{
                    'Content-type':'application/json'
                }
            }
                
    fetch(URL, config).then(response=>{
        if(response.status === 201){
            response.json()
            alert('worker created')
            navigate()
           
        }
        if(response.status === 400){
            alert('Was an error, verify if some field is empty or perhaps your email already exists')
        }
        if(response.status === 500 || response.status === 503 || response.status === 504){
            alert("There's an error with server")
        }
        }).catch(e=> console.log(e))
    
}

export async function getProfileData(setUsername, setUserEmail){
    
    let userId=auth.currentUser.uid
    let URL=`${API_URL}/user-account/${userId}/administration`
    
    let config={method: 'GET'}

    fetch(URL, config)
        .then(response=>{
            if(response.status === 200){
                response.json().then(response=>{
                    setUsername(response.userName)
                    setUserEmail(response.email)
                })
            }
            if(response.status === 404){
                alert('Resource not found')
            }
            if(response.status === 500 || response.status === 503 || response.status === 504){
                alert("There's an error with server")
            }
        })
        .then(response=>response)
        .catch(e=>alert(e))
}


export async function getWorkersData(setData){

    let initialPage=0

    let userId=auth.currentUser.uid
    let URL=`${API_URL}/${userId}/administration?page=${initialPage}`
            
    let config={method: 'GET'}

    fetch(URL, config)
        .then(response=>{
            if(response.status === 200){
                response.json().then(response=>{
                    setData(response.content)
                })
            }
            if(response.status === 404){
                alert('Resource not found')
            }
            if(response.status === 500 || response.status === 503 || response.status === 504){
                alert("There's an error with server")
            }
        })
        .then(response=>response)
        .catch(e=>alert(e))
}


export async function pagination(setData, page){

    let userId=auth.currentUser.uid
    let URL=`${API_URL}/${userId}/administration?page=${page}`
            
    let config={method: 'GET'}

    fetch(URL, config)
        .then(response=>{
            if(response.status === 200){
                response.json().then(response=>{
                    setData(response.content)
                })
            }
        })
        .then(response=>response)
        .catch(e=>alert(e))
}

export async function profileImage(){
    
}