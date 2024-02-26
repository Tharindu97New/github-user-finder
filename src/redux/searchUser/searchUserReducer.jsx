import {  FETCH_USERS_ERROR, FETCH_USERS_LOADING, FETCH_USERS_SUCCESS, } from './searchUserActionType';

const initateState = {
  loading: false,
  users: [],
  error: null,
}

export default function usersReducer(state = initateState, action) {
  switch(action.type) {
    case FETCH_USERS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}