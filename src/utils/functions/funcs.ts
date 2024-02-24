export function capitalizeFirstLetter(str: string): string {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

export function removeIndents(str: string): string {
    return str.replace(/^ */gm, "")
}