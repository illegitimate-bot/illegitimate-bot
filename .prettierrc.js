/** @type { import('prettier').Config } */

const config = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: false,
    quoteProps: "as-needed",
    trailingComma: "none",
    bracketSpacing: true,
    arrowParens: "avoid",
    parser: "typescript",
    endOfLine: "crlf",
}

module.exports = config
