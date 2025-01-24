import {Link} from 'react-router-dom'
import HeaderPage from '../HeaderPage'
import FooterPage from '../FooterPage'

import './index.css'

const HomePage = () => (
  <>
    <HeaderPage />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
          Find what you love, and let it change your life.
        </h1>
        <img
          src="https://images-platform.99static.com/_ZII2LDPr4Azr1Z7Dl1wqQJAgBA=/0x0:1654x1654/500x500/top/smart/99designs-contests-attachments/104/104821/attachment_104821930"
          alt="product home"
          className="home-mobile-img"
        />
        <p className="home-description">
          A product is anything that is created, manufactured, or offered to
          meet a need or want of consumers. It can be tangible (physical goods)
          or intangible (services, ideas, or experiences). Products are designed
          to provide value, solve problems, or fulfill desires...
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Find Product
          </button>
        </Link>
      </div>
      <img
        src="https://images-platform.99static.com/_ZII2LDPr4Azr1Z7Dl1wqQJAgBA=/0x0:1654x1654/500x500/top/smart/99designs-contests-attachments/104/104821/attachment_104821930"
        alt="product home"
        className="home-desktop-img"
      />
    </div>
    <div className="">
      <FooterPage />
    </div>
  </>
)

export default HomePage
