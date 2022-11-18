import React from 'react'
import PropTypes from 'prop-types'

const TabList = props => {
  return (
    <>
      <div className="tab">
        <div className="tab-list">
          <div className="tab-item is-active">Recent</div>
          <div className="tab-item">Popular</div>
          <div className="tab-item">Trending</div>
        </div>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          aspernatur animi asperiores repudiandae officiis molestiae! Neque atque
          quibusdam eum eos culpa animi similique dolores ea maxime assumenda
          delectus, in expedita?
        </div>
      </div>
    </>
  )
}

TabList.propTypes = {

}

export default TabList
