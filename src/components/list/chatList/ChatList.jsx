import "./chatList.css";
import Image1 from '../imgs/search1.png';
import Plus from '../imgs/plus.png';
import Minus from '../imgs/Minus.png';
import Avatar from '../imgs/ava.png';
import { useState } from "react";

const ChatList = () => {
    
    const [addMode, setAddMode ] = useState(false);
 
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src={Image1} alt=""/>
                    <input type="text" placeholder="Search"/>
                </div>
                <img src={addMode ? Minus : Plus} alt="" className="add"
                onClick={()=> setAddMode((prev) => !prev)}/>
            </div>
            <div className="item">
                <img src={Avatar} alt=""/>
                <div className="texts">
                    <span> John O</span>
                    <p> Hello </p>
                </div>  
            </div>
            <div className="item">
                <img src={Avatar} alt="" />
                <div className="texts">
                    <span> John O</span>
                    <p> Hello </p>
                </div>  
            </div>
            <div className="item">
                <img src={Avatar} alt="" />
                <div className="texts">
                    <span> John O</span>
                    <p> Hello </p>
                </div>  
            </div>
            <div className="item">
                <img src={Avatar} alt="" />
                <div className="texts">
                    <span> John O</span>
                    <p> Hello </p>
                </div>  
            </div>
            <div className="item">
                <img src={Avatar} alt="" />
                <div className="texts">
                    <span> John O</span>
                    <p> Hello </p>
                </div>  
            </div>
            
        </div>
            

            
    )
}

export default ChatList;