import React, { useEffect, useState } from "react";
import NavigationComponent from "./navigation.component";
import Category from '../../repository/category-repository'

export default function IndexNavigation() {

  const [category, setCategory] = useState([])

  const DrawCategory = async () =>{
    const categoryPromies = await Category.getCategory()
    if (categoryPromies) {
      setCategory(categoryPromies)
    }
  }

  useEffect(() => {
    DrawCategory()
  }, [])
  return (
    <div className="navigation">
      <div className="navigation-container">
        <NavigationComponent data={category} />
      </div>
    </div>
  );
}
