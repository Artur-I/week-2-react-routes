import React from 'react'
import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
