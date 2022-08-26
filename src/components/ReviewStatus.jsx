
import React from 'react'
import AverageRating from './AverageRating'
import Header from './Header'
import Card from './shared/Card'

function ReviewStatus({averageRating}) {
  return (
<Card>
    <div className='review-status-container'>  
        <div className='row'>
        <div className="header">
            <div className="heading-text">
            <h1>
            What others think about the product
                </h1>
            </div>
            <div className="average-rating">

            <div className="row">
                <div className="star">
*
                </div>
                <div className="rating">{averageRating}</div>

            </div>
            <div className="row">
                <p>Average</p>
                <p>customer rating</p>
            </div>
            </div>
        </div>
        
    </div>
    </div>
</Card>
   
  )
}

export default ReviewStatus