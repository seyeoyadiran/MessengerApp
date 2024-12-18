import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import NavBar from './components/Nav/Navbar.jsx';
import Login from './components/login/login.jsx';
import Notification from "./components/notification/Notification.jsx";
import './App.css'
function App() {

  const user = true;


  return (
    <>
    <NavBar/>
      <div className= 'container'>  
         {
          user ? (
            <>
              <List/>
              <Chat/>
              <Detail/>    
            </>
          ) : (
            <Login/>
          )}
          <Notification/>
        </div>    
    </>
  )
}

export default App









  {/* This displays the messenges content <>
              <List/>
              <Chat/>
              <Detail/>    
            </> */}