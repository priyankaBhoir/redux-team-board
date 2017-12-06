import {
  FILTER_BY_COMPANY,
  FILTER_BY_STATUS,
  TOGGLE_NAME_SORT,
  TOGGLE_COMPANY_SORT
} from '../constants/actionTypes';

const initialState = {
  companyFilters: [],
  statusFilters: [],
  sortBy: 'name',
  sortType: 'asc'
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_COMPANY :
      return Object.assign({}, state, {
        companyFilters: action.companyFilters
      })
    case FILTER_BY_STATUS :
      return Object.assign({}, state, {
        statusFilters: action.statusFilters
      })
    case TOGGLE_NAME_SORT :
      return Object.assign({}, state, {
        sortBy: 'name',
        sortType: state.sortBy === 'name' ? (state.sortType === 'asc' ? 'desc' : 'asc') : 'asc'
      })
    case TOGGLE_COMPANY_SORT :
      return Object.assign({}, state, {
        sortBy: 'company',
        sortType: state.sortBy === 'company' ? (state.sortType === 'asc' ? 'desc' : 'asc') : 'asc'
      })
    default:
      return state;
  }
}

export default filters