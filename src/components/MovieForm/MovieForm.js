import React, { useState, useRef } from 'react';

import styles from './MovieForm.module.css';
import Card from '../../UI/Card';


const MovieForm = (props) => {
    const nameInputref = useRef();
    const ratingInputRef = useRef();
    const durationInputRef = useRef();

    let [enteredName, setEnteredName] = useState('');
    let [enteredRatings, setEnteredRatings] = useState('');
    let [enteredDuration, setEnteredDuration] = useState('');
    let [enteredSearch, setEnteredSearch] = useState('');
    let [error, setError] = useState('');
    let [showError, setShowError] = useState(false);
    let [showSearchError, setSearchShowError] = useState(false);

    const addFormHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputref.current.value;
        const enteredRating = ratingInputRef.current.value;
        const enteredDuration = durationInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredRating.trim() === '' || enteredDuration.trim() === '') {
            setError({ title: 'Invalid Input', message: 'please enter a valid movie name and rating and duration.' });
            setShowError(true);
            return;
        }
        setShowError(false);
        // calling parent addMovieHandler
        props.onAddMovie({ id: Math.random().toString(), name: enteredName, rating: enteredRatings, duration: enteredDuration });
        
        nameInputref.current.value = '';
        ratingInputRef.current.value = '';
        durationInputRef.current.value = '';
        setEnteredName('');
        setEnteredRatings('');
        setEnteredDuration('');
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const ratingsChangeHandler = (event) => {
        setEnteredRatings(event.target.value);
    }
    const userDurationChangeHandler = (event) => {
        setEnteredDuration(event.target.value);
    }

    const enteredSearchHandler = (event) => {
        setEnteredSearch(event.target.value);        
        props.filterVal(event.target.value);
        if (event.target.value.trim().length <= 2) {
            setSearchShowError(true);
            return;
        } else {
            setSearchShowError(false);
        }
    }


    return <div>
        <Card className={styles.input}>
            {showError && <p>{error.message}</p>}
            <form onSubmit={addFormHandler}>
                <label htmlFor="name-input">Movie Name</label>
                <input id="name-input" type="text" value={enteredName} onChange={nameChangeHandler} ref={nameInputref} ></input>

                <label htmlFor="ratings-input">Ratings</label>
                <input id="ratings-input" type="number" min="1" max="10" step="any" value={enteredRatings} onChange={ratingsChangeHandler} ref={ratingInputRef}></input>

                <label htmlFor="duration-input">Duration</label>
                <input id="duration-input" type="text" pattern="([0-9]+h)|([0-9]+m)" value={enteredDuration} onChange={userDurationChangeHandler} ref={durationInputRef}
                title="Please enter the value in format e.g. 130m or 2h"></input>

                <button type="submit">Submit</button>
            </form>
            <div>
                {showSearchError && <p> Please enter more than 2 characters </p>}
                <label htmlFor="search-input">Search</label>
                <input id="search-input" type="text" value={enteredSearch} onChange={enteredSearchHandler}></input>
            </div>

        </Card>
    </div>
}

export default MovieForm;