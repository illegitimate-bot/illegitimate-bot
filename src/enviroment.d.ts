declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV?: "dev" | "prod"
            TYPESCRIPT?: "true"
        }
    }
}

declare global {
    interface String {
        removeIndents(): string
        capitalizeFirstLetter(): string
    }
}

export {}
