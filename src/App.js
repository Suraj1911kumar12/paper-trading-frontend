import React, { useEffect } from 'react'
import PageRoute from './routes/PageRoute'
import Aos from 'aos'

const App = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <PageRoute />
  )
}

export default App



