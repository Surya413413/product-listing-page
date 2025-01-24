import {FaChevronDown} from 'react-icons/fa'

import React, {useState} from 'react'

import './index.css'

const recomand = [
  {recomname: 'NEWEST FIRST'},
  {recomname: 'POPULAR'},
  {recomname: 'PRICE: HIGH TO LOW'},
  {recomname: 'PRICE: LOW TO HIGH'},
]

const FilterRecommand = () => {
  const [isDropdownRecomand, setDropdownRecomand] = useState(false)

  const onclickRecomand = () => {
    setDropdownRecomand(!isDropdownRecomand)
  }
  return (
    <>
      <div className="filter-containerr">
        <p>3245 ITEMS</p>
        <div className="recomman-icon">
          <p>RECOMMANDED</p>
          <FaChevronDown onClick={onclickRecomand} className="recomd-button"/>
        </div>
      </div>
      {isDropdownRecomand && (
        <ul
          className="ulorder-recomand"
          style={{listStyle: 'none', padding: 0, margin: '10px 0'}}
        >
          {recomand.map(item => (
            <li style={{margin: '5px 0', fontSize: '14px'}}>
              {item.recomname}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default FilterRecommand
