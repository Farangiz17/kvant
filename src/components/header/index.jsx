import React, {useState, useEffect} from 'react'
import HeaderComponent from './header-component'
import category from '../../repository/category-repository'

export default function Index() {
  const [selectCategory, setSelectCategory] = useState([])

  const categoryData = async () => {
      const cateroryProms = await category.getCategory()
      if (cateroryProms) {
          setSelectCategory(cateroryProms)
      }
  } 

  useEffect(() => {
      categoryData()
  },[])

 
  return (
    <div className='header-index'>
        <HeaderComponent data={selectCategory}/>
    </div>
  )
}
