/**
 * Configuration for ESLint
 * @author Andrew Jarombek
 * @since 3/22/2018
 */

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        "comma-dangle": ["error", "never"],
        "max-len": ["error", {"code" : 100}],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "no-var": "error",
        "prefer-const": "error",
        "no-console": "off"
    },
    settings: {
        react: {
            pragma: "React",
            version: "16.2.0"
        }
    }
};