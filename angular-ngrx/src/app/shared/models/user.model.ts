export class User {
    constructor(
        private username: string,
        private token : string,
        private expiryTime : number
    )
    {

    }
}