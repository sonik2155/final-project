import React from "react";

function Pagination({ totalPages, handleClick }) {
    const pages = [...Array(totalPages).keys()].map(number => number + 1)
    
    return (
        <div className='pagination'>
        {pages.map(num => (
            <button className='pagination__button' type='button' onClick={() => handleClick(num)} key={num}>{num}</button>
        ))}
        </div>
        
    )
}

export default Pagination;