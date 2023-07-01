import React from 'react'
import { Link } from "react-router-dom";

export default function CategoryFilterCategory({data}) {
  return (
    <div className="category-filter-title-card categ-filter-card">
        <h4 className='category-filter-title'>КАТЕГОРИИ</h4>
      <ul className='category-filter-card-ul'>
      {data.length > 0 &&
          data[0].children.map((item, index) => {
            return (
              <Link to={`/category/${item.id}`}>
                <li className='category-filter-card-ul-li' key={item.id}>{item.title}</li>
              </Link>
            );
          })}
      </ul>
      </div>
  )
}
