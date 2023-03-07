export const ACTION_CONSTANTS = {
  // COUNTER ACTIONS
  COUNTER_INCREMENT_ACTION: 'INCREMENT',
  COUNTER_DECREMENT_ACTION: 'DECREMENT',
  COUNTER_CUSTOM_ACTION: 'CUSTOM_INCREMENT',
  COUNTER_CHANNEL_ACTION: 'CHANNEL_NAME',
  // POSTS ACTIONS
  POST_ADD_ACTION: '[POST PAGE] ADD POST',
  POST_UPDATE_ACTION: '[POST PAGE] UPDATE POST',
  POST_DELETE_ACTION: '[POST PAGE] DELETE POST',

  // AUTH ACTIONS
  AUTH_LOGIN_START : '[AUTH PAGE] LOGIN START',
  AUTH_LOGIN_SUCCESS : '[AUTH PAGE] LOGIN SUCCESS',
  AUTH_LOGIN_FAIL : '[AUTH PAGE] LOGIN FAIL'
};

// For Feature Name/Selectors for Store
export const FEATURE_NAME_CONSTANTS = {
  COUNTER_FEATURE_NAME : 'counter',
  POST_FEATURE_NAME : 'post',
  AUTH_FEATURE_NAME : 'auth'

}

// Appliation Tooltips
export const TOOLTIPS:any = {
  ADD_POST_TOOTIP : "Add Post",
  DELETE_POST_TOOTIP : "Delete Post",
  UPDATE_POST_TOOTIP : "Update Post",
  ADD_FORM_TTILE : "Add Post",
  DELETE_FORM_TTILE : "Delete Post",
  UPDATE_FORM_TTILE : "Update Post"

}

// Application Lables
export const LABELES = {
  
}

// Application default Error Message 
export const ERRORS = {
REQUIRED : " is required",
VALID : " is valid",
MINLENGTH : " minimum character must be ",
MAXLENGTH : " maximum character msut be "
}