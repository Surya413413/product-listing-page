import {FaInstagram} from 'react-icons/fa'

import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaRegCopyright} from 'react-icons/fa'

import './index.css'

const FooterPage = () =>  (
    <div className="main-container">
      <div className="main-container-sub-one">
        <div className="footer-container-first">
          <h1>BE THE FIRST TO KNOW</h1>
          <p>sign up for updates from meta muse</p>
          <input type="text" placeholder="Enter Your e-Mail" />
          <button className="button-sub">Subcribe</button>
        </div>

        <div className="footer-container-first">
          <h1>Contact Us</h1>
          <p>+442211335360</p>
          <p>cutomercare@mettamuse.com</p>
          <h1>CURRENCY</h1>
          <h1>USD</h1>
          <p>Transactions will be completed in Euros and a CURRENT</p>
        </div>
      </div>

      <hr className="" />

      <div className="main-container-sub-one">
        <div className="footer-container-first">
          <h1>metta muse</h1>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>Eu Compliances</p>
        </div>

        <div className="footer-container-first">
          <h1>QUICK LINKS</h1>
          <p>Order and shipping</p>
          <p>payment and pricing</p>
          <p>Return and Refunds</p>
          <p>Terms and Conditions</p>
        </div>

        <div className="footer-container-first">
          <h1>FOLLOW US</h1>
          <div className="insta-link-container">
            <div className="instagram-icon">
              <FaInstagram />
            </div>
            <div className="instagram-icon">
              <AiOutlineLinkedin />
            </div>
          </div>

          <p>ACCEPTS</p>
          <img
            src="https://www.shutterstock.com/image-illustration/google-pay-logo-on-transparent-260nw-2311644375.jpg"
            className="gpay-image"
          />
          <img
            src="https://www.shutterstock.com/image-vector/paypal-multinational-financial-technology-payment-260nw-2276341185.jpg"
            className="gpay-image"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/179/179431.png"
            className="gpay-image"
          />
        </div>
      </div>
      <p className="copyright">
        Copyright{' '}
        <span>
          <FaRegCopyright />
        </span>{' '}
        2023 mettamuse. All right reserved.
      </p>
    </div>
  )

export default FooterPage
