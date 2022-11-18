import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = props => {
  return (
    <>
      <div className="dropdown">
        <div className="dropdown-select">
          <span className="dropdown-value">VietNam</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <div className="dropdown-list">
          <div className="dropdown-item">American</div>
          <div className="dropdown-item">Canada</div>
          <div className="dropdown-item">Australia</div>
        </div>
      </div>
    </>
  )
}

Dropdown.propTypes = {

}

export default Dropdown
