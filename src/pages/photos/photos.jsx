import React from 'react'
import photo from './photo'
const Photos = () => {
  return (
    <div>
       {photo.map(item => (
      <div key={item.id}>
        {item.title}
       
      </div>
    ))}
    </div>
  )
}

export default Photos