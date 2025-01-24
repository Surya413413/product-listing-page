import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import HeaderPage from '../HeaderPage'
import FooterPage from '../FooterPage'
import ProductListDetails from '../ProductListDetails'
import FilterRecommand from '../FilterRecommand'
import SidePanel from '../SidePanel'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Product extends Component {
  state = {productList: [], apiStatus: apiStatusConstants.inProgress}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const api = 'https://fakestoreapi.com/products'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(api, options)
    console.log(response)

    if (response.ok === true) {
      const data = await response.json()
      const newProducts = data.map(each => ({
        category: each.category,
        description: each.description,
        id: each.id,
        image: each.image,
        price: each.price,
        rating: each.rating,
        title: each.title,
      }))
      this.setState({
        productList: newProducts,
        apiStatus: apiStatusConstants.success,
      })
      console.log(data)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
      console.log('fail to excute')
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderProductsListView = () => {
    const {productList} = this.state
    return (
      <>
        <HeaderPage />

        <div className="product-container">
          <h1>Discover Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur.Amet est posuere rhoncus
            secelerisque. Dolor integer scelerisque nibhamet mi utelement dolor.
          </p>

          <div className="filter-container">
            <FilterRecommand />
          </div>
          <div className="sidepanal-items-container">
            <div>
              <SidePanel />
            </div>

            <ul className="unorderlist-container">
              {productList.map(each => (
                <ProductListDetails productDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
        <FooterPage />
      </>
    )
  }

  renderAllProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderAllProducts()}</>
  }
}
export default Product
