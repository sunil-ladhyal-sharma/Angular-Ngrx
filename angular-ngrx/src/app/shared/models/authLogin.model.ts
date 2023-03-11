export interface AuthLoginModel {
    username:string
    token : string,
    expiryTime : number
}

export const authLoginModel:AuthLoginModel = {
    username : '',
    token : '',
    expiryTime: 100000
}