import {
  // MEMBERS_LOADED,
  UPDATE_CURRENT_PAGE,
  ADD_MEMBER, 
  DELETE_MEMBER, 
  EDIT_MEMBER
} from '../constants/actionTypes';

const pageSize = 10;
const initialState = {
  members: [],
  currentPage: 0,
  pageSize: pageSize,
  companyFilters: [],
  statusFilters: []
};

const memberList = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PAGE :
      return Object.assign({}, state, {
        currentPage: action.currentPage
      })
    case ADD_MEMBER :
      return Object.assign({}, state, {
        currentPage: 0,
        members: [
          ...state.members,
          {
            id: action.id,
            name: action.name,
            company: action.company,
            status: action.status,
            notes: action.notes,
            lastUpdated: new Date().getTime()
          }
        ]
      })
    case DELETE_MEMBER :
      return Object.assign({}, state, {
        currentPage: 0,
        members: state.members.filter(member => member.id !== action.id)
      })

    case EDIT_MEMBER :
      return Object.assign({}, state, {
        currentPage: 0,
        members: state.members.map(member => {
          return member.id === action.id ? 
            Object.assign({}, member, action, {lastUpdated: new Date().getTime()}) : 
            member
        })
      })
    default:
      return state;
  }
}

export default memberList