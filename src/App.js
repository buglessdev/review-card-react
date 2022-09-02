import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm.jsx';
import ReviewItem from './components/ReviewItem'
import ReviewStatus from './components/ReviewStatus.jsx';

function App() {
    // State for reviews
    const [reviews, setReviews] = useState(
        [
        ]
    );
    // State for showing or hiding reviews
    const [showReviews, setShowReviews] = useState(false);
    // State for showing or hiding the review form
    const [showReviewForm, setShowReviewForm] = useState(false);
    // Remove single review. Called from ReviewItem component.
    function removeItem(id) {
        setReviews(reviews.filter((item) => item.id !== id))
    }
    // Add single review. Called from FeedbackForm component.
    function addItem(data) {
        setReviews([data, ...reviews])
    }
    // This will output the FeedbackForm component in App component if showReviewForm is true.
    function showReviewFormHandle() {
        if (showReviewForm) {
            return <FeedbackForm toggleReviewFormState={toggleReviewFormState} handleAdd={(data) => addItem(data)} />
        }
    }
    // This will output the ReviewItem component in App component if showReviews is true.
    function showReviewsHandle() {
        if (showReviews) {
            return reviews.map((item, i) => <ReviewItem key={i} item={item} handleDelete={(id) => removeItem(id)} />)
        }
    }
    // This changes state of showReviewForm when Hide Reviews button is clicked at ReviewStatus Component.
    function toggleReviewFormState() {
        setShowReviewForm(!showReviewForm);
    }
    // This changes the state of showReviews when the chevron icon is clicked on the FeedbackForm component.
    function toggleShowReviewState() {
        setShowReviews(!showReviews)
    }

    return (
        <>
            <div className="container">
                <ReviewStatus showReviews={showReviews} reviews={reviews} toggleReviewFormState={toggleReviewFormState} toggleShowReviewState={toggleShowReviewState} />
                {showReviewFormHandle()}
                {showReviewsHandle()}
            </div>
        </>

    )
}

export default App;