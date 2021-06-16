import React, { useState } from "react";

const Category = ({ data, category, handleCategory }) => {

   const [total, settotal] = useState(data.length);
  const handleData = (category) => {
    const filteredData = data.filter((proj) => proj.category.toLowerCase() === category)
    handleCategory(filteredData)
    settotal(filteredData.length);
    console.log(total);
  }

  return (
    <div className="category-buttons">
      <button className="category-button" onClick={() => {
        handleCategory(data);
        settotal(data.length)
      }}>
        All
      </button>
      {category.map((btn, index) => {
        return (
          <button
            key={index}
            className="category-button"
            onClick={() => handleData(btn.toLowerCase())}
          >
            {btn.toLowerCase()}
          </button>
        );
      })}
      <h3 className="total">Total Projects: {total}</h3>
    </div>
  );
};

export default Category;
