export type userType = {
    name: string,
    image: string
}

export type authType = {
    user?: {
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        created_at: string,
        updated_at: string,
    },
    auth?: boolean
}