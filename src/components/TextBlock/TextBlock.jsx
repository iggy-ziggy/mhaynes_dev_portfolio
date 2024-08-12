import React from 'react'
import PropTypes from 'prop-types'
import "./TextBlock.css"

const TextBlock = ({children, style}) => {
  return (
    <div className="grey">
      <div className='text_block' style={style}>
          {children}
      </div>
    </div>
  )
}

// const TextBlock = () => {
//     return (
//       <div className="grey">
//           <div className='text_block'>
//               <p><span className="bold">I approach code with the same passion I do my painting</span> because, for me, they both stem from the same place: the need to explore. Every keystroke, every brushstroke, holds the same possibility. The desire to create and problem-solve is what gets me up each morning.</p>
//               <p className='bold'>The moment a process starts working comfortably, I begin looking for ways to improve it.</p>
//               <p className='bold'>There is nothing that works so well that it cannot be improved upon.</p>
//           </div>
//       </div>
//     )
//   }



export default TextBlock