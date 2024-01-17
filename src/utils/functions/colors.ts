import chalk from "chalk"

const colors = {
    red: "#f38ba8",
    lavender: "#b4befe",
    green: "#a6e3a1",
    pink: "#f5c2e7",
}

export default function color(text: string, type: keyof typeof colors) {
    return chalk.hex(colors[type])(text)
}

/* const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",

    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m",
}

export default function colorize(text: string, color: keyof typeof colors) {
    return colors[color] + text + colors.reset
} */
