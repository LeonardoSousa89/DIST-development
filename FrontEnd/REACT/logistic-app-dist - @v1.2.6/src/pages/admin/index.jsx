import '../../App.css';
import './index.css';

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
import disable from '../../assets/disable.png'
import next from '../../assets/next.png'

import SignOut from '../../assets/btn-logout.png' 

export default (props)=>{

  const [display, setDisplay]=useState(true)
  const [displayInsert, setDisplayInsert]=useState(false)
  const [displayListWorkers, setDisplayListWorkers]=useState(false)

  const [workerName, setWorkerName]=useState(null)
  const [workerEmail, setWorkerEmail]=useState(null)
  const [workerPost, setWorkerPost]=useState(null)
  const [workerAddress, setWorkerAddress]=useState(null)
  const [workerPhoneNumber, setWorkerPhoneNumber]=useState(null)
  const [workerAge, setWorkerAge]=useState(null)

  const navigate=useNavigate()
  
  useEffect(()=>{

    verifyRoute()

    protectRoute(navigation)

    USER()

  },[])

  useEffect(()=>{},[display, displayInsert, displayListWorkers])
  
  function navigation(){
      let URL=`/login`
      navigate(URL, {replace:true})
  }

  function LogOut(){
    logOut(auth, navigation)
  }

  function cardDisplay(){
    setDisplay(true)
    setDisplayInsert(false)  
    setDisplayListWorkers(false)  
  }

  function insertDisplay(){
    setDisplay(false)
    setDisplayInsert(true)  
    setDisplayListWorkers(false) 
  }

  function listWorkersDisplay(){
    setDisplay(false)
    setDisplayListWorkers(true)  
    setDisplayInsert(false)  
  }

  function saveWorker(){
    alert(workerName + ',' + workerEmail + ',' + workerAddress + ',' + workerPost + ',' + workerPhoneNumber + ',' + workerAge)
    listWorkersDisplay()
    formFieldCleanUp()
  }

  function formFieldCleanUp(){
    setWorkerName(null)
    setWorkerEmail(null)
    setWorkerPost(null)
    setWorkerAddress(null)
    setWorkerPhoneNumber(null)
    setWorkerAge(null)
  }

  return (
    <div className="Admin">
   
      {
        display === false ? 
        (
         displayInsert === true ? 
         (
            //Insert workers display
            <div className='insertWorker'>
              <div className='formInsertWorker'>

              <div>
                <img src={logo} alt='logo icon' />
              </div>

              <TextField  label="Name"
                              id="workername"
                              variant="filled"
                              className='size'
                              value={workerName}
                              onChange={(e)=>setWorkerName(e.target.value)}
              />
                
              <TextField  label="Email"
                            id="email"
                            type={'email'}
                            variant="filled"    
                            className='size'
                            style={{marginTop:'10px'}}
                            value={workerEmail}
                            onChange={(e)=>setWorkerEmail(e.target.value)}
              />
              
              <TextField  label="Post"
                            id="post"
                            variant="filled"    
                            className='size'
                            style={{marginTop:'10px'}}
                            value={workerPost}
                            onChange={(e)=>setWorkerPost(e.target.value)}
              />

                    
              <TextField  label="Address"
                            id="address"
                            variant="filled"    
                            className='size'
                            style={{marginTop:'10px'}}
                            value={workerAddress}
                            onChange={(e)=>setWorkerAddress(e.target.value)}
              />
              
              <TextField  label="Phone number"
                            id="phonenumber"
                            variant="filled"    
                            className='size'
                            style={{marginTop:'10px'}}
                            value={workerPhoneNumber}
                            onChange={(e)=>setWorkerPhoneNumber(e.target.value)}
              />

              <TextField  label="Age"
                          id="age"
                          variant="filled"    
                          className='size'
                          style={{marginTop:'10px'}}
                          value={workerAge}
                          onChange={(e)=>setWorkerAge(e.target.value)}
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
                            onClick={saveWorker}
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
          //List of workers display
          <div className='listWorkers'>
              <div className='getWorkers'>
                  <div className='header'>
                    <InternalHeader profilePhoto={Rachel} 
                                  profileName='Rachel Weisz' 
                                  profileEmail='Rachelhollywood@gmail.com' />
                  </div>
               
                  <div className='main'>  
                      <div>
                          <table>
                            <thead>
                              <tr>
                                <td>name</td>
                                <td>address</td>
                                <td>email</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Mendes Sousa</td>
                                <td>Manhattan, NY</td>
                                <td>email@gmail.com</td>
                              </tr>
                              <tr>
                                <td>Thomas Wayne</td>
                                <td>Gotham</td>
                                <td>wayne@ask.com</td>
                              </tr>
                              <tr>
                                <td>Cris O'donnel</td>
                                <td>Manhattan, NY</td>
                                <td>done@gmail.com</td>
                              </tr>
                            </tbody>
                          </table>
                      </div>

                      <div className='paginationBtn'>

                        <div className='previewsBtn'> 
                          <img src={disable} 
                            className='previews' 
                            alt='previews list of workers'
                          />
                        </div>

                        <div className='nextBtn'>
                          <img src={next} 
                              className='next' 
                              alt='next list of workers'
                              onClick={()=>{alert('next page')}} 
                            />
                        </div>

                      </div>

                      <div className='arrowList'>
                        <img  
                            src={Arrow} 
                            alt='Arrow' 
                            onClick={cardDisplay}
                            />
                    </div>
                  </div>         
              </div>
          </div>
         )
        ) : (
          //Card operation workers display (default)
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
                      onClick={listWorkersDisplay} 
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

 
