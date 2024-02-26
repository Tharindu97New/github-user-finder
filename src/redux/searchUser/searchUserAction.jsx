import axios from "axios";
import { FETCH_USERS_ERROR, FETCH_USERS_LOADING, FETCH_USERS_SUCCESS } from "./searchUserActionType";

function fetchLoading(isLoading) {
  return {
    type: FETCH_USERS_LOADING,
    payload: isLoading,
  };
}

function fetchSuccess(data) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
}

function fetchError(error) {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
}


export function fetchSearchUsers(userName) {
  return async function (dispatch, getState) {
    dispatch(fetchLoading(true));
    try {
      const result = await axios.get(`https://api.github.com/search/users?q=${userName}`);
      dispatch(fetchSuccess(result.data.items)); 
    } catch (error) {
      dispatch(fetchError(error));
    }
    dispatch(fetchLoading(false));
    
  }
}