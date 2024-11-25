import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';

const SideBar = ({links, close}) => {
  return (
    <div className='sidebar' onClick={close}>
      {
        links.map(link => (
            <a className='sidebar-link' href={link.path} key={link.name}>
                <FontAwesomeIcon className='svg' icon={link.icon} />
                {link.name}
            </a>
             
    )
        )
      }
    </div>
  )
}

export default SideBar
