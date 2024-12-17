import "./userInfo.css";
import Image from '../imgs/ava.png';
import Image2 from '../imgs/more.png';
import Image3 from '../imgs/Video.png';
import Image4 from '../imgs/edit.png';

const UserInfo = () => {

    return(
        <>
          <div className='userInfo'> 
          <div className='user'> 
                <img src={Image} alt=""/>
                <h2> Oluwaseye Oyadiran </h2>    
            </div>  
            <div className='icons'>  
                <img src={Image2} alt="" />
                <img src={Image3} alt=""/>
                <img src={Image4} alt=""/>
            </div>
            </div>
        </>  
    )
}

export default UserInfo