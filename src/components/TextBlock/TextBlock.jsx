import React from 'react'
import PropTypes from 'prop-types'
import "./TextBlock.css"

const TextBlock = ({children, style}) => {
  return (
    <div className="text_container grey">
      <div className='text_block' style={style}>
          {children}
      </div>
    </div>
  )
}



export default TextBlock