import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home  ()  {
    return (
    
            <Navbar bg="light" >
                <Container>
                    <Navbar.Brand href="/"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/login" className="nav-link">login</Link>
                            <Link to="/user/createuser" className="nav-link">craete user</Link>
                            <Link to="/user/updateuser" className="nav-link">update user</Link>
                            <Link to="/user/deleteuser" className="nav-link">delete user</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

 
    );
}

export default Home;

