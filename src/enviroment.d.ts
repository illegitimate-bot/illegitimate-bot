declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV?: "dev" | "prod"
            TYPESCRIPT?: "true"
        }
    }
}

export { }