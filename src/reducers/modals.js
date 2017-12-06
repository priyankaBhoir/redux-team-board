import {
  HIDE_MODAL,
  SHOW_MODAL
} from '../constants/actionTypes';

const initialState = {
  showModel: false,
  modalProps: {}
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL :
      return {
        showModel: true,
        modalProps: action.member
      }
    case HIDE_MODAL :
      return initialState;
    default:
      return state;
  }
}

export default filters