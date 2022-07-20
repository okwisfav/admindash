import { Link } from 'react-router-dom';
const Navbar = () => {

    return(
         <div className="sidenav">
                <ul>
                     <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/">About</Link>
                      </li>
                     
                </ul>
         </div>
    )
}
export default Navbar