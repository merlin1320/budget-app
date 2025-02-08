import React, { useEffect } from 'react'

export const LandingPage = () => {
    useEffect(()=>{
        document.title='Home'

        return () => {
            document.title = 'My App'
        }
    })
  return (
    <div>Landing</div>
  )
}

export default LandingPage