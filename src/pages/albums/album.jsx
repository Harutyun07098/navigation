import React from 'react'
import alb from './alb'
const Albums = () => {
  return (
    <div>
    {alb.map(item => (
      <div key={item.id}>
        {item.title}
       
      </div>
    ))}
  </div>
  )
}

export default Albums