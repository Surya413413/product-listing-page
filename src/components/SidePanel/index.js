import React, {useState} from 'react'

import {FaChevronDown} from 'react-icons/fa'

import './index.css'

const listAll = [
  {
    name: 'Men',
  },
  {
    name: 'Women',
  },
  {
    name: 'Baby and Kids',
  },
]

const SidePanel = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const onclickIdeal = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <>
      <div className="sidepanal-container">
        <div className="check-custom">
          <input type="checkbox" id="custom" />
          <label htmlFor="custom">Customize</label>
        </div>
        <hr />

        <div>
          <div className="icon-name">
            <h1>IDEAL FOR</h1>

            <FaChevronDown onClick={onclickIdeal} className="icon-button" />
          </div>
          <p>all</p>
          {isDropdownVisible && (
            <ul style={{listStyle: 'none', padding: 0, margin: '10px 0'}}>
              {listAll.map(item => (
                <li style={{margin: '5px 0', fontSize: '14px'}}>
                  <input type="checkbox" id="gooo" />
                  <label htmlFor="gooo">{item.name}</label>
                </li>
              ))}
            </ul>
          )}
        </div>

        <hr />

        <div>
          <div className="icon-name">
            <h1>OCCUSION</h1>
            <FaChevronDown />
          </div>
          <p>all</p>
        </div>

        <hr />
        <div>
          <div className="icon-name">
            <h1>WORK</h1>
            <FaChevronDown />
          </div>

          <p>all</p>
        </div>
        <hr />
        <div>
          <div className="icon-name">
            <h1>RAW METRIALS</h1>
            <FaChevronDown />
          </div>

          <p>all</p>
        </div>
        <hr />
        <div>
          <div className="icon-name">
            <h1>PATTERN</h1>
            <FaChevronDown />
          </div>

          <p>all</p>
        </div>
      </div>
    </>
  )
}

export default SidePanel
