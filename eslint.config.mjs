import typescriptEslint from "@typescript-eslint/eslint-plugin"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

// eslint-disable-next-line no-redeclare
const __filename = fileURLToPath(import.meta.url)
// eslint-disable-next-line no-redeclare
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default [
    {
        ignores: ["**/node_modules", "**/dist"]
    },
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
            },

            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },

        rules: {
            indent: ["error", 4, {
                SwitchCase: 1,
            }],

            "linebreak-style": ["error", "unix"],
            quotes: ["warn", "double"],
            semi: ["error", "never"],
            "no-unused-vars": "off",
            "prefer-const": "warn",
            "no-var": "error",

            "no-multiple-empty-lines": ["error", {
                max: 2,
                maxEOF: 1,
                maxBOF: 0,
            }],

            "no-lonely-if": "error",
            "no-empty-function": "error",
            "no-inline-comments": "error",
            "no-trailing-spaces": ["error"],

            "arrow-spacing": ["warn", {
                before: true,
                after: true,
            }],

            "space-before-function-paren": ["error", {
                anonymous: "never",
                named: "never",
                asyncArrow: "always",
            }],

            "comma-spacing": "error",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-explicit-any": "off",

            "@typescript-eslint/no-unused-vars": ["warn", {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
            }],
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/ban-ts-comment": ["error", {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": "allow-with-description",
                "ts-check": "allow-with-description",
            }],
        },
    }, {
        languageOptions: {
            globals: {
                ...globals.node,
            },

            ecmaVersion: 5,
            sourceType: "commonjs",
        },
    }
]
