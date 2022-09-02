import React from 'react'
import CProgressBar from './CProgressBar';
import Card from './shared/Card'
import { FaStar } from 'react-icons/fa'

function ReviewStatus({ showReviews, reviews, toggleReviewFormState, toggleShowReviewState }) {
    function generateRatingObj() {
        const ratingArray = reviews.map((item) => item.rating)
        const ratingObj = {}

        for (const num of ratingArray) {
            ratingObj[num] = ratingObj[num] ? ratingObj[num] + 1 : 1;
        }
        return ratingObj;
    }

    function getTotalRating() {
        let totalRating = 0;
        reviews.forEach((item) => {
            totalRating = totalRating + item['rating'];

        });
        return totalRating;
    }
    function getAverageRating() {
        if (reviews.length === 0) {
            return 0;
        }
        return getTotalRating() / reviews.length;
    }
    function displayProgressBars() {
        const ratingObj = generateRatingObj()
        let reviewsArray = [ratingObj[5], ratingObj[4], ratingObj[3], ratingObj[2], ratingObj[1]];
        reviewsArray = Array.from(reviewsArray, v => v === undefined ? 0 : v)
        if (getTotalRating() === 0) {
            return reviewsArray.map((rating, i) => <CProgressBar key={i} rating={5 - i} pc="0" />)
        }
        return reviewsArray.map((rating, i) => <CProgressBar key={i} rating={5 - i} pc={(rating / getTotalRating()) * 100} />
        )

    }

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
                                    <FaStar color='#EFB153' />
                                </div>
                                <div className="rating">{getAverageRating().toFixed(1)}</div>

                            </div>
                            <div>
                                <p>Average</p>
                                <p>customer rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progress-bars-container">

                    {displayProgressBars()}
                </div>

                <div className="button-container">
                    <button className='btn' onClick={toggleReviewFormState}>Write Review</button>
                    <button className='btn' onClick={toggleShowReviewState}>{showReviews ? 'Hide' : 'Show'} Reviews</button>
                </div>



            </div>
        </Card>

    )
}

export default ReviewStatus