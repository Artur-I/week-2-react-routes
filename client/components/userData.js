import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Header from './header'

const UserData = () => {
  const { userName } = useParams()
  const [repositories, getRepositories] = useState([])
  
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`)
      .then(repos => getRepositories(repos.data))
    return () => {}
  }, [userName])
  return (
    <div>
      <Header user={userName} />
      <div>
        {repositories.map(repo => {
          return (
            <li key={repo.id}>
              <Link to={`/${userName}/${repo.name}`}>{repo.name}</Link>
            </li>
          )
        })}
      </div>
    </div>
  )
}

UserData.propTypes = {}

export default UserData
