export interface User extends UserLoginData {
    id: number,
    address: string,
    phone: string
}

export interface UserLoginData {
    name: string,
    email: string
}