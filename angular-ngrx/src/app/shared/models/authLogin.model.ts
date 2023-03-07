export interface AuthLoginModel {
    token : string,
    expiryTime : number
}

export const authLoginModel:AuthLoginModel = {
    token : '',
    expiryTime: 100000
}