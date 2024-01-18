import React from 'react'

function LinkMenu({icon, title}) {
  return (
    <div className='flex items-center gap-4'>
        {icon}
        <span>{title}</span>
    </div>
  )
}

export default LinkMenu