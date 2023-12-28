export type Profile = {
    data: {
        id: string
        name: string
    }
}

export type Profile2 = {
    data: {
        id: string
        name: string
        properties: { name: string; value: string }[]
        profileActions: []
    }
}
