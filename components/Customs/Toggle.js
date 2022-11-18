import React from 'react'
import PropTypes from 'prop-types'

const Toggle = props => {
  return (
    <>
      <label className="toggle" htmlFor="toggle">
        <input id="toggle" type="checkbox" className="toggle-input" style={{ display: 'none' }} />
        <div className="toggle-main">
          <div className="toggle-spinner" />
        </div>
      </label>
    </>
  )
}

Toggle.propTypes = {

}

export default Toggle
