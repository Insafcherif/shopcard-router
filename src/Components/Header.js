import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';

function Header({user, setUser}) {
    const Navigate = useNavigate()
    const handleLogout=()=>{
        setUser({...user, connect : false})
        Navigate("/")
    }
    return (
        <Navbar bg="light" expand="lg" fixed="top" style={{
            display: "flex",
            boxShadow: '1px 2px 9px gray',
            justifyContent: 'space-around',
            height : '65px'
        }} >
            <Link to="/">
                <Button variant="outline-primary">List</Button>
            </Link>
            {!user.connect ? <div> 
                <Link to="/SignIn">
                <Button variant="outline-secondary">Connect</Button>
            </Link>
            </div> : 
              <dir > 
               <Link to="/Profil"> 
               <Avatar style={{marginRight :"500px"}} name={user.name} size={40} round={30} /> 
               </Link> 
                <Button variant="outline-danger" onClick={handleLogout}>Logout</Button></dir>  
             }
           

        </Navbar>
    )
}

export default Header