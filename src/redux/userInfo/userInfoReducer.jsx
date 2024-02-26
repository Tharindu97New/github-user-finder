import {   FETCH_USER_INFO_ERROR, FETCH_USER_INFO_LOADING, FETCH_USER_INFO_SUCCESS, } from './userInfoActionType';

const initateState = {
  loading: false,
  userInfo: {},
  error: null,
}

export default function userInfoReducer(state = initateState, action) {
  switch(action.type) {
    case FETCH_USER_INFO_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };

    case FETCH_USER_INFO_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}