import './detail.css'
import Avatar from '../imgs/ava.png';
import UpArrow from '../imgs/arrowUp.png'
import DownArrow from '../imgs/arrowDown.png';
import Download from '../imgs/download.png'
 const Detail = () => {
    return (
        <div className = 'detail'> 
        <div className="user">
            <img src={Avatar} alt=""  />
            <h2> Oluwaseye Oyadiran </h2>
            <p> Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span> 
                        <img src={UpArrow} alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span> 
                        <img src={UpArrow} alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span> 
                        <img src={UpArrow} alt="" />
                    </div>
                </div> 
                 <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src={DownArrow} alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img 
                                src={Avatar} 
                                alt="" 
                                
                            />
                            <span>SomeImage.png</span>
                            </div>
                            <img src={Download} alt="" className='icon'/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img 
                                src={Avatar} 
                                alt="" 
                                
                            />
                            <span>SomeImage.png</span>
                            </div>
                            <img src={Download} alt="" className='icon'/>
                        </div>
                    </div>
                 </div>
                    
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span> 
                        <img src={UpArrow} alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className='logout'> Logout  </button>
            </div>
        </div>
        
    )
 }
 
 export default Detail;