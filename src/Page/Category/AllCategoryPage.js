import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Utility/Pagination'

const AllCategoryPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
      <CategoryContainer/>
      <Pagination/>
    </div>
  )
}

export default AllCategoryPage
