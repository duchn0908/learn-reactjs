
import logo from './logo.jpeg.webp';
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
                    <div className="col-6">Phai</div>
                </div>
            </div>
        </div>

    )
}
export default Header;