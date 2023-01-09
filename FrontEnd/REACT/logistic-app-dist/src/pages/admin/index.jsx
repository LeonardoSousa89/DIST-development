import '../../App.css';

import { Button, TextField } from '@material-ui/core'

import { logOut } from '../../services'
import { auth } from '../../services/db';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export default (props)=>{

  const navigate=useNavigate()

  useEffect(()=>{},[])
  
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
                > login
            </Button>

    </div>
  );
}

 
