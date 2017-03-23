import {
  USER_LOG_OUT,
  USER_LOG_IN,
  USER_REGISTRATE,
} from '../constants/navbarConstants';
import axios from 'axios';
import UserHelpers from '../helpers/UserHelpers'

export const logoutUser = (csrfToken) => (
  dispatch => {
    axios({
      method: "DELETE",
      url: "/user/sign_out.json",
      data: {
        // If csrfToken has been updated, use the new csrfToken.
        // Otherwise get it from metadata.
        authenticity_token: csrfToken || UserHelpers.getMetaContent("csrf-token"),
      }
    }).then((respond) => {
      dispatch({
        type: USER_LOG_OUT,
        data: respond.data,
      })
    })
});

export const loginUser = ({ email, password }, csrfToken, hideSignInModal) => (
  dispatch => {
    axios({
      method: "post",
      url: "/user/sign_in.json",
      data: {
        user: {
          email,
          password,
        },
        // If csrfToken has been updated, use the new csrfToken.
        // Otherwise get it from metadata.
        authenticity_token: csrfToken || UserHelpers.getMetaContent("csrf-token"),
      }
    }).then((respond) => {
      hideSignInModal();
      dispatch({
        type: USER_LOG_IN,
        data: respond.data,
      });
    })
});


export const registerUser = ({ email, password, username }, csrfToken, hideSignUpModal) => (
  dispatch => {
    axios({
      method: "post",
      url: "/user.json",
      data: {
        user: {
          username,
          email,
          password,
        },
        // If csrfToken has been updated, use the new csrfToken.
        // Otherwise get it from metadata.
        authenticity_token: csrfToken || UserHelpers.getMetaContent("csrf-token"),
      }
    }).then((respond) => {
      hideSignUpModal();
      dispatch({
        type: USER_REGISTRATE,
        data: respond.data,
      });
    })
});
