import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector} from "react-redux";
import { logout } from '../../JS/ACTIONS/actions';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
function Navb() {
  const dispatch=useDispatch()
  const user =useSelector(state=>state.user.user)
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand as={Link} to="/">
          <img
            src={"https://res.cloudinary.com/dvdx4mvqx/image/upload/v1712874468/s61yodqkyheunf6gohcw.png"}
            alt="Navbar Logo"
            width="100"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link ><Link to={"/"} style={{ textDecoration: "none",color:"black" }}>Home</Link></Nav.Link>
            <Nav.Link style={(user && user.prefileges === "Admin") ? { display: "flex" } : { display: "none" }}>
  <Link to="/addproduct" style={{ textDecoration: "none", color: "black", display: "flex" }}>Add product</Link>
</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="search by name or description"
              className="me-2"
              aria-label="Search"
             
            />
          </Form>
          <Nav.Link ><Link to={"/"} style={user?{ textDecoration: "none",color:"black" ,display:"flex"}:{display:"none"}} onClick={()=>dispatch(logout())}><FontAwesomeIcon icon={faRightFromBracket} /></Link><Link to={"/login"} style={!user?{ textDecoration: "none",color:"black" ,display:"flex"}:{display:"none"}}><FontAwesomeIcon icon={faUser} /></Link></Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;