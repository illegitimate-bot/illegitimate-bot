export class MissingEnvVarsError extends Error {
    constructor(value: string) {
        super("Missing environment variables")

        this.message = value
    }
}
