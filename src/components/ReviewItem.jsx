import React from 'react'
import {useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card.jsx'

export default function ReviewItem({item,handleDelete}) {
    const [rating,setRating] = useState(5)
    const [text,setText] = useState('Great Job')

  return (
    <Card>
        <div className="rating-container">
        <div className='rating-text'>{item.text}</div>
        <div className="rating-value">{item.rating}</div>
        <FaTimes onClick={()=>handleDelete(item.id)}/>
        </div>    
    </Card>
  )
}
