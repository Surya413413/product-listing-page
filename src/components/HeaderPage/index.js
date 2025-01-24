import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FaSearch} from 'react-icons/fa'
import {FaRegHeart} from 'react-icons/fa'
import {IoBagCheckOutline} from 'react-icons/io5'
import {FaShoppingBag} from 'react-icons/fa'

import './index.css'

const HeaderPage = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg"
              alt="website logo"
            />
          </Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg"
              alt="website logo"
            />
          </Link>
          <div className="logo-text">
            <h1>LOGO</h1>
          </div>
          <div className="icon-logut-container">
            <div className="icons-heart-search-container">
              <FaSearch className="icons-heart" />
              <FaRegHeart className="icons-heart" />
              <IoBagCheckOutline className="icons-heart" />
            </div>

            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/products" className="nav-link">
              shop
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/skill" className="nav-link">
              Skills
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/stories" className="nav-link">
              Stores
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
              <h1>HOME</h1>
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <FaShoppingBag />
              <h1>SHOP</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(HeaderPage)
