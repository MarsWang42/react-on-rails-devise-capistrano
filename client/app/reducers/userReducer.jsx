import {
  USER_LOG_OUT,
  USER_LOG_IN,
  USER_REGISTRATE,
} from '../constants/navbarConstants';

const UserReducer = (state = '', action) => {
  switch (action.type) {
    case USER_LOG_OUT:
      return { ...state,
        isSignedIn: false,
        csrfToken: action.data.csrfToken,
        currentUser: null,
      };
    case USER_LOG_IN:
      return { ...state,
        isSignedIn: true,
        csrfToken: action.data.csrfToken,
        currentUser: action.data.currentUser,
      };
    case USER_REGISTRATE:
      return {...state,
        isSignedIn: true,
        csrfToken: action.data.csrfToken,
        currentUser: action.data.currentUser,
      }
    default:
      return state;
  }
};

export default UserReducer;
