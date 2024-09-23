import React from 'react'
import Resume from '../../lib/Matthew_Haynes_resume.pdf'

const ResumeDownload = () => {
  return (
    <div className="resume__btn-container">
      <a
        href={Resume}
        download="MatthewHaynesResume"
        target="blank"
        rel="noreferrer"
        className="btn resume__download-btn"
      >
        My Resume
      </a>
    </div>
  )
}

export default ResumeDownload