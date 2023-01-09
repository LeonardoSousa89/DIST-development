import '../../App.css';

import { Button, TextField } from '@material-ui/core'

import { logOut, USER, protectRoute, verifyRoute } from '../../services'
import { auth } from '../../services/db';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

  return (
    <div className="Admin">

      {/* teste */}
      <Button    
                        variant="contained" 
                        style={{    
                                fontWeight:'bold', 
                                background:'#2976E6',
                                marginTop:'10px'
                            }}
                        onClick={LogOut}
                > exit
            </Button>

    </div>
  );
}

 
