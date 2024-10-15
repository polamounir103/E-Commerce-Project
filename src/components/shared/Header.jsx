import { useState, useEffect } from "react";
import Styles from "../../styles/components/shared/header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const {
    header,
    headerLogo,
    largManu,
    smallMenu,
    menuToggeler,
    smallMenuShow,
    showMenu,
    hideMenu,
    headerNavBtnBox,
    button,
  } = Styles;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuShow, setIsMenuShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuToggeling = () => {
    setIsMenuShow(!isMenuShow);
  };
  const menuClosing = () => {
    setIsMenuShow(false);
  };
  return (
    <header className={`${header}`}>
      <img src="/network.svg" alt="Company Logo" className={headerLogo} />
      <nav>
        <div className={headerNavBtnBox}>
          <button
            className={`${menuToggeler}`}
            onClick={menuToggeling}
            onBlur={menuClosing}
          >
            <div className={`menu-toggler-icon-box ${isMenuShow && "active"}`}>
              <div className={`line`}></div>
              <div className={`line`}></div>
              <div className={`line`}></div>
            </div>
          </button>
        </div>
        <div
          className={`${screenWidth > 768 ? largManu : smallMenu} ${
            isMenuShow && smallMenuShow
          }`}
        >
          <div className={`${isMenuShow ? showMenu : hideMenu}`}>
            <ul>
              <li>
                <Link to="/" onClick={menuClosing} aria-label="Go to Home">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  onClick={menuClosing}
                  aria-label="Learn more about us"
                >
                  Admin
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={menuClosing}>
                  <button
                    aria-label="Login"
                    className={`bg-indigo-600 hover:bg-indigo-700 ${button}`}
                  >
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
