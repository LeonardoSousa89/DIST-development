import '../../App.css';
import './index.css';


import { Button, TextField } from '@material-ui/core'

import { logOut, USER, protectRoute, verifyRoute } from '../../services'
import { auth } from '../../services/db';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import InternalHeader from '../../components/internalHeader'

import Rachel  from '../../assets/Rachel.png'
import SignOut from '../../assets/btn-logout.png' 

export default (props)=>{

  const navigate=useNavigate()
  
  useEffect(()=>{

    verifyRoute()

    protectRoute(navigation)

  },[])
  
  function navigation(){
      let URL=`/login`
      navigate(URL, {replace:true})
  }

  
  function internalNavigation(id){
    URL=`/dist/${id}/administration`
    navigate(URL,{replace:true})
  }

  function changePage(){

    /* essa função está gerando erro de memória
       verificar e corrigir.
       
       changePage(internalNavigation)
    */
   
    let id=auth.currentUser.uid
    internalNavigation(id)
  }

  return (
    <div className="Admin">

      <div className='border'>
        
        <InternalHeader profilePhoto={Rachel} 
                        profileName='Rachel Weisz' 
                        profileEmail='Rachelhollywood@gmail.com' />

        <div className='listWorkerContaner'>
            <img src={SignOut} 
                 alt='logout buton'
                 className='signOut'
                 onClick={changePage}
                />
        </div>

      </div>

    </div>
  );
}

 
