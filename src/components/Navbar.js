import '../components/style.css';
import { Link }  from 'react-router-dom';

function Navbar() {
    
    return (
        <ul  className="navegation" >  
             <li className="itemlink">
                 <Link to="/" className="link">Home</Link>
            </li>   

             <li className="itemlink">
                 <Link to="/course" className="link">Course</Link>
            </li> 

             <li className="item-link-right">
                 <Link to="/about" className="link">About</Link>
            </li>      
        </ul>   
    )
}

export default Navbar;