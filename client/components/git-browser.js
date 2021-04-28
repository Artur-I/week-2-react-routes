import React, { useState } from 'react'
import { history } from '../redux'

const GitBrowser = () => {
  const [name, setName] = useState('')

  const onChange = (e) => {
    const userName = e.target.value
    setName(userName)
  }

  const onClick = () => {
    history.push(`/${name}`)
    console.log('pew')
    console.log({name})
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <input className="text-black m-2" id="input-field" type="text" value={name} onChange={onChange} />
          <button className="m-2" type="button" id="search-button" onClick={onClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

GitBrowser.propTypes = {}

export default GitBrowser
