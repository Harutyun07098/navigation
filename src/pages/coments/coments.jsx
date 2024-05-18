import React from 'react'
import db from './db'
const Coments = () => {
  return (
    <div>
    {db.map(item => (
      <div key={item.id}>
        {item.name}
        {item.email}
        {item.body}
      </div>
    ))}
  </div>
  )
}

export default Coments