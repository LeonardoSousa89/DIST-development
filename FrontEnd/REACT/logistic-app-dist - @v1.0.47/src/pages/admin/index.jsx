import '../../App.css';

import { Button, TextField } from '@material-ui/core'

import { logOut, USER, protectRoute, verifyRoute, changePage } from '../../services'
import { auth } from '../../services/db';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import InternalHeader from '../../components/internalHeader'

import Rachel from '../../assets/Rachel.png'
import cardWorker from '../../assets/card-worker.png'
import listWorker from '../../assets/workers-list-btn.png'

export default (props)=>{

  const navigate=useNavigate()
  
  useEffect(()=>{

    verifyRoute()

    protectRoute(navigation)

    USER()

  },[])
  
  function navigation(){
      let URL=`/login`
      navigate(URL, {replace:true})
  }

  function LogOut(){
    logOut(auth, navigation)
  }

  function internalNavigation(id){
    URL=`/dist/worker/${id}/administration`
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

        <div className='cardContaner'>

          <img className='cardWorker' 
              src={cardWorker} 
              alt='card of workers'
              onClick={()=>{toast.info('test to press buton')}}
              />
          
          <img src={listWorker} 
               className='listWorker' 
               alt='list of workers'
               onClick={changePage} 
               />

        </div>

      </div>

    </div>
  );
}

 
