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
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
function Navb() {
  const dispatch=useDispatch()
  const user =useSelector(state=>state.user.user)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/addproduct">add</Link>
            <Nav.Link ><Link to={"/"} style={{ textDecoration: "none",color:"black" }}>Home</Link></Nav.Link>
           <diV style={user===null?{display:"flex"}:{display:"none"}}><Nav.Link ><Link to={"/register"} style={{ textDecoration: "none",color:"black" }}>register</Link></Nav.Link>
            <Nav.Link ><Link to={"/login"} style={{ textDecoration: "none",color:"black" }}>login</Link></Nav.Link></diV>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav.Link ><Link to={"/"} style={user?{ textDecoration: "none",color:"black" ,display:"flex"}:{display:"none"}} onClick={()=>dispatch(logout())}><FontAwesomeIcon icon={faRightFromBracket} /></Link></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;