import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Img/logo.jpeg.webp';

const Header = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <a href="#">
                            <img src={logo} alt='OpenChat' className='logo' ></img>
                        </a>
                    </div>
                    <div className="col-6">

                        <Nav className='Nav-bar'>
                            <Nav.Link href="#" className='Nav-link'>About us</Nav.Link>
                            <Nav.Link href="#" className='Nav-link'>Feature</Nav.Link>
                            <Nav.Link href="#" className='Nav-link'>FAQs</Nav.Link>
                            <Nav.Link href="#" >
                                <button className='try-it-now'>Try it now</button>
                            </Nav.Link>

                        </Nav>


                    </div>
                </div >
            </div >
        </div >

    )
}
export default Header;