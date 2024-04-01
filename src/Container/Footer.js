import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import logo2 from '../Img/logo-white.webp'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="top-footer">
                        <div className="col-25">
                            <img src={logo2} alt='logo-white' className='logo-white' ></img>
                        </div>
                        <div className="col-25">
                            <ul>
                                <li className='head-footer'>OPEN CHAT</li>
                                <li className='text-footer'><a href='#' className='a'>About us</a></li>
                                <li className='text-footer'><a href='#' className='a'>Features</a></li>
                            </ul>
                        </div>
                        <div className="col-25">
                            <ul>
                                <li className='head-footer'>DOWNLOAD</li>
                                <li className='text-footer'><a href='#' className='a'>Iphone</a></li>
                                <li className='text-footer'><a href='#' className='a'>Android</a></li>
                                <li className='text-footer'><a href='#' className='a'>Web-browser</a></li>
                            </ul>
                        </div>
                        <div className="col-25">
                            <ul>
                                <li className='head-footer'>RESOURCES</li>
                                <li className='text-footer'><a href='#' className='a'>Terms of use</a></li>
                                <li className='text-footer'><a href='#' className='a'>Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="col-25">
                            <ul>
                                <li className='head-footer'>CONTACT US</li>
                                <li className='text-footer'><a href='#' className='a'>Facebook</a></li>
                                <li className='text-footer'><a href='#' className='a'>Twitter</a></li>
                                <li className='text-footer'><a href='#' className='a'>support@belo.chat</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        © 2024 OpenChat. Ltd. All rights reserved
                    </div>
                </div>
            </div >
        </>
    )
}
export default Footer