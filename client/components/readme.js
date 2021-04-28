import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import axios from 'axios'

import Header from './header'

const Readme = () => {
  const { userName, repositoryName } = useParams()
  const [text, setText] = useState('')

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then(md => setText(md.data))
  })
  
  return (
    <div>
      <Header user={userName} />
      <div id="description">
        <Markdown>{text}</Markdown>
      </div>
    </div>
  )
}

export default Readme
