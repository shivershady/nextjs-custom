import React from 'react'
import PropTypes from 'prop-types'

const Modal = props => {
  return (
    <>
      <div className="modal">
        <div className="modal-overlay" />
        <div className="modal-content">
          <span className="modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
          <div className="modal-main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            maiores eligendi deleniti ipsa quae nam sunt quasi nisi, dignissimos
            eaque aliquam minus. Eius perferendis, voluptates totam iure minus
            consequuntur est?
          </div>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {

}

export default Modal
