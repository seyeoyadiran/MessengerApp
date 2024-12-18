import './Navbar.css';

const Navbar = function(){

    return (
        <> 
  <div className="topnav">
  <a  href="/">Home</a>
  <a href="/">Movies</a>
  <a href="/">Shows</a>
  <a className="active" href="#Messages">Messages</a>
</div>

        
        </>
    )
}

export default Navbar;