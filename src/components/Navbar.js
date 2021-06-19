import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button as ButtonLink } from "./Button";
import "./Navbar.css";

const Navbar = ({ bgColor }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar" style={{ backgroundColor: bgColor }}>
        <div div className="navbar-container">
          {/* <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    // //   ire Bex <i className="fab fa-typo3" /> */}{" "}
          <div className="button_nav"></div>
          {button && (
            <ButtonLink
              to="services"
              ButtonStyle="btn--outline"
              className="btn_nav"
            >
              ورود
            </ButtonLink>
          )}
          {button && (
            <ButtonLink
              to="sign-up"
              ButtonStyle="btn--outline"
              className="btn_nav2"
            >
              ثبت نام{" "}
            </ButtonLink>
          )}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                تماس باما
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                بلاگ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                راهنما
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                قوانین و مقررات
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu}>
                درباره ما{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                صفحه اصلی
              </Link>
            </li>
          </ul>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            ire Bex <i className="fab fa-typo3" />
          </Link>
          {/* {button && <Button ButtonStyle="btn--outline">ورود</Button>}
                  {button && <Button ButtonStyle="btn--outline">ثبت نام  </Button>} */}
          {/* <a href="/SignUp" >
                      <button className="btn-si">ثبت نام</button>
                  </a> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
