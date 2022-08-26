import { useState } from 'react'
import Header from './components/Header.jsx'
import ReviewItem from './components/ReviewItem'
import ReviewStatus from './components/ReviewStatus.jsx';

function App() {
    const [reviewItems, setReviewItems] = useState(
        [
            {
                'id': 1,
                'text': 'Great Products', rating: 5
            },
            {
                'id': 2,
                'text': 'Cool Stuff', rating: 4
            },
            {
                'id': 3,
                'text': 'Not bad', rating: 3
            }
        ]
    );


    function getAverageRating() {
        let totalRating = 0;
        reviewItems.forEach((item) => {
            totalRating = totalRating + item['rating'];

        })
        console.log(totalRating);
                console.log(totalRating);
        
        return totalRating / reviewItems.length;
    }

    const [averageRating, setAverageRating] = useState(getAverageRating());
    function removeItem(id) {
        setReviewItems(reviewItems.filter((item) => item.id !== id))
        setAverageRating(getAverageRating())
        console.log(getAverageRating());
    }
    return (
        <>
            <div className="container">
                <ReviewStatus averageRating={averageRating} />
                {reviewItems.map((item) => <ReviewItem item={item} handleDelete={(id) => removeItem(id)} />)}
            </div>


        </>

    )
}

export default App;