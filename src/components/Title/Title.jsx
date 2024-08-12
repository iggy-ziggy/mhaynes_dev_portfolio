import React from 'react'
import PropTypes from 'prop-types'
import "./Title.css"

const Title = ({children}) => {
  return (
    <h1 className='page_title'>{children}</h1>
  )
}

Title.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Title