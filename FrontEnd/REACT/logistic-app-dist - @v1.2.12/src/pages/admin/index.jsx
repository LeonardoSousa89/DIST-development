import '../../App.css';
import './index.css';

import { Button, TextField } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import ImageIcon from '@material-ui/icons/Image';

import { logOut, 
         USER, 
         protectRoute, 
         verifyRoute, 
         insertWorker, 
         getProfileData, 
         uploadProfilePhoto,
         getProfilePhotoUploaded,
         getWorkersData,
         pagination } from '../../services'

import { auth, storage } from '../../services/db';

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
import camera from '../../assets/camera.png'

import SignOut from '../../assets/btn-logout.png' 

export default (props)=>{

  const [userName, setUserName]=useState('')
  const [userEmail, setUserEmail]=useState('')   

  const [display, setDisplay]=useState(true)
  const [displayInsert, setDisplayInsert]=useState(false)
  const [displayListWorkers, setDisplayListWorkers]=useState(false)

  const [image, setImage]=useState(null)

  const [workerName, setWorkerName]=useState(null)
  const [workerEmail, setWorkerEmail]=useState(null)
  const [workerPost, setWorkerPost]=useState(null)
  const [workerAddress, setWorkerAddress]=useState(null)
  const [workerPhoneNumber, setWorkerPhoneNumber]=useState(null)
  const [workerAge, setWorkerAge]=useState(null)

  const [data, setData]=useState([])  
  const [page, setPage]=useState(0) 

  const navigate=useNavigate()
  
  useEffect(()=>{

    verifyRoute()

    protectRoute(navigation)

    USER()

    getProfileData(setUserName, setUserEmail)

    getProfilePhotoUploaded(setImage)

    getWorkersData(setData, page)

  },[])

  useEffect(()=>{},[data, image, display, displayInsert, displayListWorkers])
  
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
    let userId=auth.currentUser.uid
    insertWorker(workerName, workerEmail, workerPost,
                 workerAddress, workerPhoneNumber, workerAge, 
                 userId, listWorkersDisplay, formFieldCleanUp)
  }

  function formFieldCleanUp(){
    setWorkerName(null)
    setWorkerEmail(null)
    setWorkerPost(null)
    setWorkerAddress(null)
    setWorkerPhoneNumber(null)
    setWorkerAge(null)
  }

  function uploadFile(e){
    e.preventDefault()
    uploadProfilePhoto(e, storage, setImage)
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
                          onChange={(e)=>{setWorkerName(e.target.value)}}
              />
                
              <TextField  label="Email"
                          id="email"
                          type={'email'}
                          variant="filled"    
                          className='size'
                          style={{marginTop:'10px'}}
                          value={workerEmail}
                          onChange={(e)=>{setWorkerEmail(e.target.value)}}
              />
              
              <TextField  label="Post"
                          id="post"
                          variant="filled"    
                          className='size'
                          style={{marginTop:'10px'}}
                          value={workerPost}
                          onChange={(e)=>{setWorkerPost(e.target.value)}}
              />

                    
              <TextField  label="Address"
                          id="address"
                          variant="filled"    
                          className='size'
                          style={{marginTop:'10px'}}
                          value={workerAddress}
                          onChange={(e)=>{setWorkerAddress(e.target.value)}}
              />
              
              <TextField  label="Phone number"
                          id="phonenumber"
                          variant="filled"    
                          className='size'
                          style={{marginTop:'10px'}}
                          value={workerPhoneNumber}
                          onChange={(e)=>{setWorkerPhoneNumber(e.target.value)}}
              />

              <TextField  label="Age"
                          id="age"
                          variant="filled"    
                          className='size'
                          style={{marginTop:'10px'}}
                          value={workerAge}
                          onChange={(e)=>{setWorkerAge(e.target.value)}}
                />
                
                <Button   type="submit"
                          variant="contained" 
                          size="large"
                          className='size'
                          style={{ fontWeight:'bold', background:'#2976E6', marginTop:'10px' }}
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
                    <InternalHeader profilePhoto={image} 
                                    profileName={userName} 
                                    profileEmail={userEmail} />
                  </div>
               
                  <div className='main'>  
                      {
                       
                      //  data.map(e=>{
                      //     return(
                      //       <table>
                      //         <thead>
                      //           <tr>
                      //             <th>name</th>
                      //             <th>address</th>
                      //             <th>email</th>
                      //           </tr>
                      //         </thead>
                      //         <tbody key={e.workerId}>
                      //           <tr>
                      //             <td>{e.workerName}</td>
                      //             <td>{e.workerAddress}</td>
                      //             <td>{e.workerEmail}</td>
                      //           </tr>
                      //         </tbody>
                      //       </table>
                      //     )
                      //  })
                      
                      }

                    
                      {/* metodo de teste */}

                            <table>
                              <thead>
                                <tr>
                                  <th>name</th>
                                  <th>address</th>
                                  <th>email</th>
                                </tr>
                              </thead>
                              
                                {
                                  data.length != [] ? 
                                  (
                                    data.map(e=>{ 
                                      return(
                                        <tbody key={e.workerId}>
                                        <tr>
                                            <td>{e.workerName.substring(0, 16)}</td>
                                            <td>{e.workerAddress.substring(0, 16)}</td>
                                            <td>{e.workerEmail.substring(0, 24)}</td>
                                          </tr>
                                        </tbody>
                                      )
                                    })
                                  ) : (
                                    
                                    <tbody>
                                      <tr>
                                          <td>no data</td>
                                          <td>no data</td>
                                          <td>no data</td>
                                      </tr>
                                    </tbody>
                                    
                                    )
                                
                                }

                            </table>
                      

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
        
              <InternalHeader profilePhoto={image}
                              profileName={userName} 
                              profileEmail={userEmail} />

      
              <div className='cardContaner'>

                <form className='formUpload' 
                      onSubmit={uploadFile}
                >
                  <label htmlFor="profilePhotoUpload" 
                         className="control_label_profilePhotoUpload">
                            <ImageIcon  />  
                  </label>
                  
                  <input type={'file'} 
                         id="profilePhotoUpload" 
                         name="profilePhotoUpload" 
                         className="profilePhotoUpload"
                  />

                  <Button type="submit"
                          variant="contained" 
                          size="large"
                          className='load'
                          style={{ fontWeight:'bold', 
                                   background:'#2976E6', 
                                   height:'40px', 
                                   marginTop: '6px',
                                   marginLeft: '5px' }}
                    > change photo
                  </Button>
                </form>
        
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

 
