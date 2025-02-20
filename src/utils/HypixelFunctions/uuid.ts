function formatUuid(uuid: string): string {
    return uuid.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5")
}

export { formatUuid }
