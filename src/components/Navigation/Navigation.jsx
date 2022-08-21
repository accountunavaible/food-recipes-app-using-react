import {Link, useLocation} from "react-router-dom";
import logoSvg from "../../assets/logo.svg";
import {useEffect, useState} from "react";

function Navigation() {
    const {pathname} = useLocation();
    const [show, setShow] = useState(false);
    const handleHeaderClick = () => {
        setShow(!show);
    }

    useEffect(() => {
        setShow(false)
    }, [pathname]);

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/" className="nav-logo">
                        <img src={logoSvg} alt="simply recipes" />
                    </Link>
                    <button className="btn nav-btn" type="button" onClick={handleHeaderClick}>
                        <i className="fas fa-align-justify" />
                    </button>
                </div>
                <div className={`nav-links ${show ?  'show-links' : ''}`}>
                    <Link to="/" className="nav-link">home</Link>
                    <Link to="/about" className="nav-link">about</Link>
                    <Link to="/tags" className="nav-link">categories</Link>
                    <div className="nav-link contact-link">
                        <Link to="/contact" className="btn">contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
