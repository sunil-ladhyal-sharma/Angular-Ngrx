export interface sharedState {
    spinnerStatus : boolean,
    error: customError
}

export interface customError {
    showError : boolean,
    errorMessage : string
}
export const initialState:sharedState = {
    spinnerStatus : false,
    error: {showError : false, errorMessage : ''}
}