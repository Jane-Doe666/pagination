module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: ["warn", "always"],
        "prefer-const": "error",
        "space-before-function-paren": ["error", "always"],
        "max-len": ["error", { code: 120 }],

        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "jsx-quotes": ["error", "prefer-double"],
        "multiline-ternary": ["error", "always-multiline"],
        "react/prop-types": 0,
        "no-console": "warn",
        "comma-dangle": ["error", "only-multiline"],
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "never"]
    },
};
