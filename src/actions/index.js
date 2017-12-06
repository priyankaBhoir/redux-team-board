import {v4} from 'uuid';
import {
  // MEMBERS_LOADED,
  FILTER_BY_COMPANY,
  FILTER_BY_STATUS,
  UPDATE_CURRENT_PAGE,
  ADD_MEMBER, 
  DELETE_MEMBER, 
  EDIT_MEMBER,
  SHOW_MODAL,
  HIDE_MODAL,
  TOGGLE_NAME_SORT,
  TOGGLE_COMPANY_SORT
} from '../constants/actionTypes';

export const addMember = (member) => ({
  type: ADD_MEMBER,
  ...member,
  id: v4()
})

export const updateCompanyFilter = (currentFilters) => ({
  type: FILTER_BY_COMPANY,
  companyFilters: currentFilters
})

export const updateStatusFilter = (currentFilters) => ({
  type: FILTER_BY_STATUS,
  statusFilters: currentFilters
})

export const updatePage = (pageNumber) => ({
  type: UPDATE_CURRENT_PAGE,
  currentPage: pageNumber
})

export const deleteMember = (id) => ({
  type: DELETE_MEMBER,
  id
})

export const updateMember = (member) => ({
  type: EDIT_MEMBER,
  ...member
})

export const showModal = (member = {}) => ({
  type: SHOW_MODAL,
  member
})

export const hideModal = () => ({
  type: HIDE_MODAL
})

export const toggleSort = (columnName) => {
  switch(columnName) {
    case 'name': return({type: TOGGLE_NAME_SORT})
    case 'company': return({type: TOGGLE_COMPANY_SORT})
    default: console.log("currently not supported");
  }
}