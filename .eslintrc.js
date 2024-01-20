module.exports = {
    env: {
        node: true,
        es2021: true,
        browser: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        "linebreak-style": ["error", "windows"],
        quotes: ["warn", "double"],
        semi: ["error", "never"],
        "no-unused-vars": "off",
        "prefer-const": "warn",
        "no-var": "error",
        "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 0 }],
        "no-lonely-if": "error",
        "no-empty-function": "error",
        "no-inline-comments": "error",
        "no-trailing-spaces": ["error"],
        "arrow-spacing": ["warn", { before: true, after: true }],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                named: "never",
                asyncArrow: "always",
            },
        ],
        "comma-spacing": "error",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
            },
        ],
    },
}
