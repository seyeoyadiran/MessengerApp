import "./chat.css"
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react"

{/* Importing Images */}
import Avatar from './imgs/ava.png';
import Phone from './imgs/phone.png';
import Video from './imgs/Video.png';
import Info from './imgs/info.png';
import Emoji from './imgs/emoji.png';
import Img from './imgs/img.png';
import Camera from './imgs/Camera.png';
import Mic from './imgs/mic.png';
import Stellar from './imgs/Interstellar.jpg';
const Chat = () => {

    const [open, setOpen ] = useState(false);
    const [text, setText] = useState("");

    const endRef = useRef(null)
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth"});
    }, []);

    const handleEmoji = e =>{
        setText((prev)  => prev + e.emoji);
        setOpen(false)
    };

    return(
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src={Avatar} alt=""/>
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p> Lorem ipsum dolor, sit amet</p>
                    </div>
                </div>
                <div className="icons"> 
                    <img src={Phone} alt="" />
                    <img src={Video} alt="" />
                    <img src={Info} alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message ">
                    <img src={Avatar} alt="" />
                    <div className="texts">
                        <p> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est commodi officiis aperiam assumenda velit ad aliquid dolorum neque mollitia, dicta iusto maiores necessitatibus natus sed. Recusandae velit ipsum tempora.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est commodi officiis aperiam assumenda velit ad aliquid dolorum neque mollitia, dicta iusto maiores necessitatibus natus sed. Recusandae velit ipsum tempora.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src={Avatar} alt="" />
                    <div className="texts">
                        <p> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est commodi officiis aperiam assumenda velit ad aliquid dolorum neque mollitia, dicta iusto maiores necessitatibus natus sed. Recusandae velit ipsum tempora.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est commodi officiis aperiam assumenda velit ad aliquid dolorum neque mollitia, dicta iusto maiores necessitatibus natus sed. Recusandae velit ipsum tempora.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
                <div className="message ">
                    <img src={Avatar} alt="" /> 
                    <div className="texts">
                        <p> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est commodi officiis aperiam assumenda velit ad aliquid dolorum neque mollitia, dicta iusto maiores necessitatibus natus sed. Recusandae velit ipsum tempora.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                    <img src={Stellar} alt="" />   
                        <p> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est commodi officiis aperiam assumenda velit ad aliquid dolorum neque mollitia, dicta iusto maiores necessitatibus natus sed. Recusandae velit ipsum tempora.
                        </p>
                        <span> 1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons"> 
                    <img src={Img} alt="" />
                    <img src={Camera} alt="" />
                    <img src={Mic} alt="" />
                </div>
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={text}
                    onChange={e=> setText(e.target.value)} />
                <div className="emoji">
                    <img 
                        src={Emoji}
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                    
                </div>
                <button className="sendButton"> Send</button>
            </div>
            
        </div>
    )
}

export default Chat; 