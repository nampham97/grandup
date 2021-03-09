import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function NavPage({userName}){
    const styleLink ={
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.5em'
    }

    return (
        
        <Navbar bg="dark" expand="lg" className="navPage" variant="dark">
            <Navbar.Brand>
                <Link style={styleLink} to="/">GrandUp</Link>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" exact to={userName ? '/private' : '/'}>Home</NavLink>

                    <NavLink className="nav-link" to="/about">About</NavLink>
                </Nav>

                <Nav >
                    {!userName ? <Nav.Item className="nav-link">{`Hello ${userName ? userName : 'Friend'}`}</Nav.Item> :
                    <NavDropdown title={`Hello ${userName ? userName : 'Friend'}`} id="basic-nav-dropdown" alignRight>

                        <NavDropdown.Item href="#action/3.1" as={Link} to="/private/profile">Profile</NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.2" as={Link} to="/private/summary">Summary</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3" as={Link} to="/">Log Out</NavDropdown.Item>

                    </NavDropdown>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}