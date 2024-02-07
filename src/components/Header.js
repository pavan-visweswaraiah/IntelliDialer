import Logo from '../assets/images/Intelliverse-logo.png';
import { MenuItem } from './MenuItem';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="navigation  main-navigation fixed-top">
            <nav className="navbar navbar-custom navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" width="220" height="75"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav menu-left nav align-items-center  mb-2 mb-lg-0">
                            {MenuItem.map((menu, index)=>{
                                return(
                                    <li className='nav-item' key={index}>
                                        <Link className='nav-link' to={menu.url}>{menu.title}</Link>
                                    </li>
                                )
                            })}
                            <div className="button-right">
                            <li><a href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3000000B4iSWEAZ">Get a free trial</a></li>
                        </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;