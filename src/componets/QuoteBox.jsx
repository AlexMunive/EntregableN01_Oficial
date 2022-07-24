import React from 'react'

const QuoteBox = ({ randomQuotes, randomColors,getRamdonAll }) => {

    console.log(randomQuotes, randomColors)

    const objectStyle = {
        color: randomColors
    }

    const objectBgStyle = {
        backgroundColor: randomColors
    }

    return (
        <article className='card' style={objectStyle}>
            <div className='card__quote'>
                <i className='bx bxs-quote-left'></i>
                <h1>{`${randomQuotes.quote}`}</h1>
            </div>
            <div className='card__author'>
                <h2>{`${randomQuotes.author}`}</h2>
                <button onClick={getRamdonAll} className='btn' style={objectBgStyle}>&#62;</button>
            </div>
        </article>
    )
}

export default QuoteBox