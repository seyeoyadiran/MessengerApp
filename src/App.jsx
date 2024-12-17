import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import NavBar from './components/Nav/Navbar.jsx';
import './App.css'
function App() {
  return (
    <>
    <NavBar/>
      <div className= 'container'>  
        <List/>
        <Chat/>
        <Detail/>
        </div>    
    </>
  )
}

export default App
