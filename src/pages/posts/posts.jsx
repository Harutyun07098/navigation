import React from 'react'
import data from './data'

const Posts = () => {
  return (
    <div className='div'>
      {data.map(item => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Posts