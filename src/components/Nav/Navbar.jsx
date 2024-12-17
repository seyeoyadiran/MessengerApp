import './Navbar.css';

const Navbar = function(){

    return (
        <> 
  <div className="topnav">
  <a  href="#home">Home</a>
  <a href="#Movies">Movies</a>
  <a href="#Shows">Shows</a>
  <a className="active" href="#Messages">Messages</a>
</div>

        
        </>
    )
}

export default Navbar;