export type User =  {
    email : string
    password: string
}

export type PayloadToken = {
    accessToken: string
    refreshToken: string
}

export type SuspenseComponentProps = {
    children: React.ReactNode
    fallback?: React.ReactNode
}

export type ContainerProps = {
    children: React.ReactNode
}