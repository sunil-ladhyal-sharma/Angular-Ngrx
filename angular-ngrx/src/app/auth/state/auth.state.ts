

export interface AuthState  {
   user : {}
}

export const initialState:AuthState = {

   user : {
    username : '',
    token : '',
    expiryTime : ''
   }

}