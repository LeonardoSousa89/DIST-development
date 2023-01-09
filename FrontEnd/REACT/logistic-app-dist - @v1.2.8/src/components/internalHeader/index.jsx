import '../../App.css';
import '../../pages/admin/index.css'

import Logo from '../../assets/dist-icon.png'
import Logo_text from '../../assets/DIST.png'

export default (props)=>{  

  return (
    <div className="internalHeader">

      <div className='logoContainer'>
        <img className='logoIcon' src={Logo} alt='dist logo'/>
        <img className='logoText' src={Logo_text} alt='dist logo text'/>
      </div>

      <div className='profileContainer'>

        <div className='profilePhotoContainer'>
          <img className='clientPhoto' src={props.profilePhoto} alt='profile photo'/>
        </div>

        <div className='profileInfoContainer'>
          <h1>{props.profileName}</h1> 
          <h4>{props.profileEmail}</h4> 
        </div>

      </div>

    </div>
  );
}

 
