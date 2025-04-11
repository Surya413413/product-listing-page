// import {FaChevronDown} from 'react-icons/fa'

// import React, {useState} from 'react'

// import './index.css'

// const recomand = [
//   {recomname: 'NEWEST FIRST'},
//   {recomname: 'POPULAR'},
//   {recomname: 'PRICE: HIGH TO LOW'},
//   {recomname: 'PRICE: LOW TO HIGH'},
// ]

// const FilterRecommand = () => {
//   const [isDropdownRecomand, setDropdownRecomand] = useState(false)

//   const onclickRecomand = () => {
//     setDropdownRecomand(!isDropdownRecomand)
//   }
//   return (
//     <>
//       <div className="filter-containerr">
//         <p>3245 ITEMS</p>
//         <div className="recomman-icon">
//           <p>RECOMMANDED</p>
//           <FaChevronDown onClick={onclickRecomand} className="recomd-button" />
//         </div>
//       </div>
//       {isDropdownRecomand && (
//         <ul
//           className="ulorder-recomand"
//           style={{listStyle: 'none', padding: 0, margin: '10px 0'}}
//         >
//           {recomand.map(item => (
//             <li style={{margin: '5px 0', fontSize: '14px'}}>
//               {item.recomname}
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   )
// }

// export default FilterRecommand

import React, {Component} from 'react'
import {FaChevronDown} from 'react-icons/fa'
import ProductListDetails from '../ProductListDetails'
import SidePanel from '../SidePanel'
import './index.css'

const sortOptions = [
  'NEWEST FIRST',
  'POPULAR',
  'PRICE: HIGH TO LOW',
  'PRICE: LOW TO HIGH',
]

class FilterRecommand extends Component {
  state = {
    isDropdownOpen: false,
    selectedSort: 'NEWEST FIRST',
    productsList: [],
    sidebar: false,
  }

  componentDidMount() {
    const {products} = this.props
    this.setState({productsList: products})
  }

  toggleDropdown = () => {
    this.setState(prev => ({isDropdownOpen: !prev.isDropdownOpen}))
  }

  sidebarbutton = () => {
    this.setState(prev => ({sidebar: !prev.sidebar}))
  }

  sortProducts = selected => {
    const {productsList} = this.state
    const sortedList = [...productsList]

    if (selected === 'PRICE: LOW TO HIGH') {
      sortedList.sort((a, b) => a.price - b.price)
    } else if (selected === 'PRICE: HIGH TO LOW') {
      sortedList.sort((a, b) => b.price - a.price)
    } else if (selected === 'POPULAR') {
      sortedList.sort((a, b) => b.rating.count - a.rating.count)
    } else if (selected === 'NEWEST FIRST') {
      sortedList.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    }
    // Add more sort logic if needed

    this.setState({
      selectedSort: selected,
      isDropdownOpen: false,
      productsList: sortedList,
    })
  }

  render() {
    const {isDropdownOpen, selectedSort, productsList, sidebar} = this.state

    return (
      <div>
        <div className="filter-containerr">
          <div>
            <p>{productsList.length} ITEMS</p>
            {sidebar ? (
              <p onClick={this.sidebarbutton} className="sidepanelhide">
                hide filter
              </p>
            ) : (
              <p onClick={this.sidebarbutton} className="sidepanelshow">
                show filter
              </p>
            )}
          </div>
          <div className="recomman-icon">
            <p>{selectedSort}</p>
            <FaChevronDown
              onClick={this.toggleDropdown}
              className="recomd-button"
            />
          </div>
        </div>

        {isDropdownOpen && (
          <ul
            className="ulorder-recomand"
            style={{listStyle: 'none', padding: 0, margin: '10px 0'}}
          >
            {sortOptions.map(option => (
              <li
                key={option}
                onClick={() => this.sortProducts(option)}
                style={{
                  margin: '5px 0',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
        <div className="sidepanal-items-container">
          {sidebar ? (
            <div>
              <SidePanel />
            </div>
          ) : (
            ''
          )}
          <ul className="products-list">
            {productsList.map(product => (
              <ProductListDetails key={product.id} productDetails={product} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default FilterRecommand
