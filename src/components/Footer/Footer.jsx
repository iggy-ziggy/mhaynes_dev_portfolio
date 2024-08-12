import React from 'react'
import './Footer.css'

const Footer = ({children}) => {
  return (
    <div className='footer'>
        <p className='copyright'>&copy; 2024 Matthew Haynes</p>
        <div>
        {children.map((c, i) => <img className='footer_icon' key={i} src={c}/>)}
        </div>
    </div>
  )
}

export default Footer