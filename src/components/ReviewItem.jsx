import React from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card.jsx'
import { FaStar } from 'react-icons/fa'

export default function ReviewItem({ item, handleDelete }) {
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('Great Job')

  return (
    <Card>
      <div className="rating-container">
        <div className="left">
          <div className='rating-text'>{item.text}</div>
        </div>
        <div className="right">
          <div className="rating-value">{item.rating}</div>
          <FaStar color='#EFB153' />
          <FaTimes style={{ marginLeft: '20' }} onClick={() => handleDelete(item.id)} />
        </div>
      </div>
    </Card>
  )
}
