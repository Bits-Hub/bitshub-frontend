import React from 'react'

export default function Rating(
    // props
) {
  return (
    <div className={`${
        // view
        'flex'
         === 'flex' ? 'flex flex-col text-center' : 'flex flex-row'} gap-1 text-sm text-yellow-400 items-center`}>
      {/* <div>
        <span>
          <i
            className={rating >= 1 ? "fa-solid fa-star" : rating >= 0.5 ? "fa-solid fa-star-half" : "fa-regular fa-star"}
          ></i>
        </span>
        <span>
          <i
            className={rating >= 2 ? "fa-solid fa-star" : rating >= 1.5 ? "fa-solid fa-star-half" : "fa-regular fa-star"}
          ></i>
        </span>
        <span>
          <i
            className={rating >= 3 ? "fa-solid fa-star" : rating >= 2.5 ? "fa-solid fa-star-half" : "fa-regular fa-star"}
          ></i>
        </span>
        <span>
          <i
            className={rating >= 4 ? "fa-solid fa-star" : rating >= 3.5 ? "fa-solid fa-star-half" : "fa-regular fa-star"}
          ></i>
        </span>
        <span>
          <i
            className={rating >= 5 ? "fa-solid fa-star" : rating >= 4.5 ? "fa-solid fa-star-half" : "fa-regular fa-star"}
          ></i>
        </span>
      </div>

      <span className={`${view === 'flex' ? 'w-20 text-center' : ''} text-sm text-gray-500`}>{`${reviews} reviews`} </span> */}
    </div>
  )
}
