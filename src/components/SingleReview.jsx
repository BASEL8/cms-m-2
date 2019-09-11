import React from "react";
const SingleReview = ({ value: { content, name, rating } }) => {
  return (
    <div className='mb-2 p-2 shadow-sm border-bottom border-light w-100'>
      <div>
        <div> {name}</div>
        <div>
          {Array(rating)
            .fill("")
            .map((i, index) => (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 24 24'
                fill='#FF4E00'
                style={{ margin: 1 }}
                key={index}
              >
                <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z' />
              </svg>
            ))}
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};
export default SingleReview;
