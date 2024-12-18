import "./addUser.css"; 
import Avatar from "../imgs/ava.png"

const AddUser = () => {
    

    return (
        <div className= 'addUser'> 
            <form>
                <input type="text" placeholder="Username" name="username"s />
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                <img src={Avatar} alt=""  style={{height:"100px"}}/>
                    <span>UserName</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    )
}

export default AddUser;