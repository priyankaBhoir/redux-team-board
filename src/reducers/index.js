import { combineReducers } from 'redux'
import members from './memberList'
import filters from './filters'
import modals from './modals'

const teamBoardApp = combineReducers({
  team:members,
  filters,
  modals
})

export default teamBoardApp