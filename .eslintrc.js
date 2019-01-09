module.exports = {
    extends: ["google", "prettier"],
    plugins: ["prettier"],
    parser: "babel-eslint",
    rules: {
        semi: ["error", "never"],
        "no-unused-vars": ["error", { args: "none" }],
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-console": "off",
        "prettier/prettier": "error",
        "no-constant-condition": "off",
        "require-jsdoc": "off"
    }
}
