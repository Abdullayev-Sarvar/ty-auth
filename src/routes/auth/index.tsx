import React from 'react'
import { Outlet } from 'react-router-dom'

const auth: React.FC = () => {
  return (
    <div>
      <div>
        Auth
        <Outlet />
      </div>
    </div>
  )
}

export default auth