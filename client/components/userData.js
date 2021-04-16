import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserName = (props) => {
  return <div>Username: {props.username}</div>
}

const UserRepository = (props) => {
  return <div>
    
    <div>
      {props.name}
    </div>
  </div>
}

const UserData = () => {
  const [repositories, getRepositories] = useState([])
  useEffect(() => {
    axios.get(`https://api.github.com/users/artur-i/repos`)
      .then(repos => getRepositories(repos.data))
    return () => {}
  }, [])
  return <div>
    <Link to="/">Back to Search</Link>
    <UserName />
    {repositories.map(repo => {
      return <UserRepository key={repo.name} {...repo} />
    })}
  </div>
}

UserData.propTypes = {}

export default UserData
