import React from 'react'
import StickyNotePNG from '../../assets/post_it.png'
import './StickyNote.css'

const StickyNote = ({text}) => {
  return (
    <div className='single_sticky_note_container'>
        <h4>{text}</h4>
        <img src={StickyNotePNG} alt="sticky note" />
    </div>
  )
}

export default StickyNote