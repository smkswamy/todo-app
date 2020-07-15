import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All tasks</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Pending</FilterLink>
  </div>
)

export default Footer