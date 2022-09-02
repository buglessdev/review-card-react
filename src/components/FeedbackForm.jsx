import React, { useState } from 'react'
import Card from './shared/Card'
import { v4 as uuidv4 } from 'uuid'
import { FaChevronUp } from 'react-icons/fa'


function FeedbackForm({ handleAdd, toggleReviewFormState }) {
    const [text, setText] = useState('');
    const [select, setSelect] = useState('5');
    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleSelect = (e) => {
        setSelect(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newRating = {
            id: uuidv4(),
            text,
            rating: +select
        }
        handleAdd(newRating);
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <h2>Rate Us</h2>
                    <FaChevronUp onClick={toggleReviewFormState} />
                </div>
                <div className="input-group">
                    <input type="text" onChange={handleText} value={text} placeholder="Enter Rating" />
                </div>
                <p>Please select your rating</p>
                <div className="input-group">
                    <input type="radio" id="r5" onChange={handleSelect} name="rating" value="5" checked={select === '5'} />
                    <label htmlFor="r5">5</label>
                    <input type="radio" id="r4" onChange={handleSelect} name="rating" value="4" checked={select === '4'} />
                    <label htmlFor="r4">4</label>
                    <input type="radio" id="r3" onChange={handleSelect} name="rating" value="3" checked={select === '3'} />
                    <label htmlFor="r3">3</label>
                    <input type="radio" id="r2" onChange={handleSelect} name="rating" value="2" checked={select === '2'} />
                    <label htmlFor="r2">2</label>
                    <input type="radio" id="r1" onChange={handleSelect} name="rating" value="1" checked={select === '1'} />
                    <label htmlFor="r1">1</label>
                </div>
                <div className="input-group">
                    <button className="btn" type="submit" value="Submit">Submit</button>
                </div>

            </form>
        </Card >
    )
}

export default FeedbackForm
