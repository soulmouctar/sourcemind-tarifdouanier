import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">&copy; 2024 Sourcemind.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Student Name</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Souleymane Mouctar DIALLO
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
