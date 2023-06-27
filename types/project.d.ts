type AuthType = {
    username: string,
    password: string
}

type MusicPayload = {
    title: string,
    description: string,
    image: string,
    singer: string,
    release_date: Date
}
type MusicFormPayload = {
    title: string,
    description: string,
    singer: string,
    image: any,
    audio: any,
    date_released: Date
}

type MusicProps = {
    id: string,
    title: string,
    description: string,
    audio: string,
    image: string,
    singer: string,
    date_released: string,
    slug: string,
}