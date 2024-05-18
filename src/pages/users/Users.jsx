import React from 'react'
import user from './user'
const Users = () => {
  return (
    <div className='div'>
    {user.map(item => (
      <div key={item.id}>
        {item.name}
        {item.username}
        {item.address.city}
      </div>
    ))}
  </div>
  )
}

export default Users