import { useEffect } from 'react'

export const LandingPage = () => {
    useEffect(()=>{
        document.title='Home'

        return () => {
            document.title = 'My App'
        }
    })
  return (
    <div>Landing Home Page</div>
  )
}

export default LandingPage