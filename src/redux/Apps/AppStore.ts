import { UserType } from "~/types/UserType";

// Action Types
export const SET_USER = 'SET_USER';

// Action Creators
export const setUser = (user: UserType) => ({
  type: SET_USER,
  user,
});

// reducer
const initialState = {
  user: UserType
};

const AppStore = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:

      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default AppStore;
