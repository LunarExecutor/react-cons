import {useState} from 'react'

const Header = () => {
        const [changeHeader, setChangeHeader] = useState(false);

        const changeHeaderColor = () => {
            if(window.scrollY >= 50) {
                setChangeHeader(true)
            } else {
                setChangeHeader(false)
            }
        }

        window.addEventListener('scroll', changeHeaderColor)

        
 return (
     <header className="header" id = "header" style={{backgroundColor: changeHeader ? 'rgb(30,33,38)' : 'transparent'}}> 
    <nav className="nav container">
      <a href="#home" className="nav__logo">Zenith<span>.</span>Consultants </a>

      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">HOME</a>
          </li>
          <li className="nav__item">
            <a href="#products" className="nav__link">PROJECTS</a>
          </li>
          <li className="nav__item">
            <a href="#Place" className="nav__link">CONTACT</a>
          </li>
          <li className="nav__item">
            <a href="#blog" className="nav__link">WHAT WE DO</a>
          </li>
        </ul>

        <div className="nav__close" id="nav-close">
          <i className="bx bx-x"></i>
        </div>
      </div>

      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-grid-alt"></i>
      </div>
    </nav>
  </header>

    );
}



export default Header;