import axios from "axios";
import { FETCH_USER_INFO_ERROR, FETCH_USER_INFO_LOADING, FETCH_USER_INFO_SUCCESS } from "./userInfoActionType";

function fetchLoading(isLoading) {
  return {
    type: FETCH_USER_INFO_LOADING,
    payload: isLoading,
  };
}

function fetchSuccess(data) {
  return {
    type: FETCH_USER_INFO_SUCCESS,
    payload: data,
  };
}

function fetchError(error) {
  return {
    type: FETCH_USER_INFO_ERROR,
    payload: error,
  };
}


export function fetchUserInfo(userName) {
  return async function (dispatch, getState) {
    dispatch(fetchLoading(true));
    try {
      const result = await axios.get(`https://api.github.com/users/${userName}`);
      dispatch(fetchSuccess(result.data)); 
    } catch (error) {
      dispatch(fetchError(error));
    }
    dispatch(fetchLoading(false));
    
  }
}