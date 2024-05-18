import React from 'react'
import tod from './tod'
const Todos = () => {
  return (
    <div className='div'>
      {tod.map(item => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Todos