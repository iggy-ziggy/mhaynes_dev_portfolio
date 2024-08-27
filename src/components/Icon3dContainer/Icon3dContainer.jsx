import React, { useState } from 'react'
import Icon3dCanvas from '../Icon/Icon3d'
import { SiBootstrap, SiCss3, SiExpress, SiGraphql, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiReact, SiSequelize } from '@icons-pack/react-simple-icons'

const icons2 = [
    {
      name: 'HTML',
      image: <SiHtml5 color="white" size={100} />
    },
    {
      name: 'CSS',
      image: <SiCss3 color="white" size={100} />
    },
    {
      name: 'JavaScript',
      image: <SiJavascript color="white" size={100} />
    },
    {
      name: 'React',
      image: <SiReact color="white" size={100} />
    },
    {
      name: 'Bootstrap',
      image: <SiBootstrap color="white" size={100} />
    },
    {
      name: 'MySQL',
      image: <SiMysql color="white" size={100} />
    },
    {
      name: 'MongoDB',
      image: <SiMongodb color="white" size={100} />
    },
    {
      name: 'Express',
      image: <SiExpress color="white" size={100} />
    },
    {
      name: 'Sequelize',
      image: <SiSequelize color="white" size={100} />
    },
    {
      name: 'GraphQL',
      image: <SiGraphql color="white" size={100} />
    },
  ]

const Icon3dContainer = () => {
    const [clicked, setClicked] = useState(null)

    const handleClick = (index) => {
      setClicked(clicked === index ? null : index)
    }
  
    return (
      <>
        <div className="icon_container">
          {icons2.map((icon, index) => (
            <div key={icon.name} onClick={() => handleClick(index)} className={`icon ${clicked !== index ? '' : 'clicked'}`}>
              <h2 className="icon_title">{icon.name}</h2>
              <Icon3dCanvas image={icon.image} />
            </div>
          ))}
        </div>
      </>
    );
}

export default Icon3dContainer