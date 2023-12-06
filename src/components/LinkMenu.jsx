import React from 'react'

function LinkMenu({icon, title}) {
  return (
    <div className='link-menu'>
        {icon}
        <span>{title}</span>
    </div>
  )
}

export default LinkMenu