import './index.css'

const ProductListDetails = props => {
  const {productDetails} = props
  const {title, category, description, image, price, rating} = productDetails

  return (
    <li className="similar-product-item">
      <img
        src={image}
        className="similar-product-img"
        alt={`similar product ${title}`}
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-products-brand">by {category}</p>
      <p className="similar-products-brand">{description}</p>
      <p className="similar-products-brand">Count {rating.count}</p>
      <div className="similar-product-price-rating-container">
        <p className="similar-product-price">Rs {price}/-</p>
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">Rating {rating.rate}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-product-star"
          />
        </div>
      </div>
    </li>
  )
}

export default ProductListDetails
