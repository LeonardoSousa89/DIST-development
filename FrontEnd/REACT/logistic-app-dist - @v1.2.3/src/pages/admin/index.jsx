import '../../App.css';

import { Button, TextField } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';

import { logOut, USER, protectRoute, verifyRoute, changePage } from '../../services'
import { auth } from '../../services/db';

import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import InternalHeader from '../../components/internalHeader'

import Rachel from '../../assets/Rachel.png'
import Arrow from '../../assets/Arrow.png'
import cardWorker from '../../assets/card-worker.png'
import listWorker from '../../assets/workers-list-btn.png'
import logo from '../../assets/dist-icon.png'

import SignOut from '../../assets/btn-logout.png' 

export default (props)=>{

  const [display, setDisplay]=useState(false)

  const navigate=useNavigate()
  
  useEffect(()=>{

    verifyRoute()

    protectRoute(navigation)

    USER()

  },[])

  useEffect(()=>{},[display])
  
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

  function cardDisplay(){
    setDisplay(false)   
  }

  function insertDisplay(){
    setDisplay(true)   
  }

  return (
    <div className="Admin">
   
      {
        display === true ? 
        (
          <div className='insertWorker'>
                  <div className='formInsertWorker'>

                    <div>
                      <img src={logo} alt='logo icon' />
                    </div>

                    <TextField  label="Name"
                                    id="workername"
                                    variant="filled"
                                    className='size'
                                    // style={{marginTop:'80px'}}
                                    // value={email}
                                    // onChange={(e)=>setEmail(e.target.value)}
                    />
                      
                    <TextField  label="Email"
                                  id="email"
                                  type={'email'}
                                  variant="filled"    
                                  className='size'
                                  style={{marginTop:'10px'}}
                                  // value={password}
                                  // onChange={(e)=>setPassword(e.target.value)}
                    />
                    
                    <TextField  label="Post"
                                  id="post"
                                  variant="filled"    
                                  className='size'
                                  style={{marginTop:'10px'}}
                                  // value={password}
                                  // onChange={(e)=>setPassword(e.target.value)}
                    />

                          
                    <TextField  label="Address"
                                  id="address"
                                  variant="filled"    
                                  className='size'
                                  style={{marginTop:'10px'}}
                                  // value={password}
                                  // onChange={(e)=>setPassword(e.target.value)}
                    />
                    
                    <TextField  label="Phone number"
                                  id="phonenumber"
                                  variant="filled"    
                                  className='size'
                                  style={{marginTop:'10px'}}
                                  // value={password}
                                  // onChange={(e)=>setPassword(e.target.value)}
                    />

                    <TextField  label="Age"
                                id="age"
                                variant="filled"    
                                className='size'
                                style={{marginTop:'10px'}}
                                // value={password}
                                // onChange={(e)=>setPassword(e.target.value)}
                      />
                      
                      <Button     type="submit"
                                  variant="contained" 
                                  size="large"
                                  className='size'
                                  style={{    
                                          fontWeight:'bold', 
                                          background:'#2976E6',
                                          marginTop:'10px'
                                      }}
                                  endIcon={<SaveIcon  />}
                                  onClick={cardDisplay}
                          > save
                      </Button>
                      
                      <div className='arrow'>
                          <img  
                              src={Arrow} 
                              alt='Arrow'
                              onClick={cardDisplay}
                              />
                      </div>
                    
                  </div>
          </div>
        ) : (
          <div className='border'>
        
              <InternalHeader profilePhoto={Rachel} 
                              profileName='Rachel Weisz' 
                              profileEmail='Rachelhollywood@gmail.com' />
      
              <div className='cardContaner'>
      
                <div className='cardElements'>
                  <img className='cardWorker' 
                      src={cardWorker} 
                      alt='card of workers'
                      onClick={insertDisplay}
                      />
                  
                  <img src={listWorker} 
                      className='listWorker' 
                      alt='list of workers'
                      onClick={changePage} 
                      />
                </div>
                
                <div className='logout'>
                  <img src={SignOut} 
                        alt='logout buton'
                        className='signOut'
                        onClick={LogOut}
                        /> 
                </div>
                
              </div>
    
          </div>
        )
      }
     
    </div>
  );
}

 
