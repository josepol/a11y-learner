module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "tsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        'plugin:@typescript-eslint/recommended',
        "plugin:react/recommended"
    ],
    "rules": {
        "indent": ["error", 2],
        "comma-dangle": 0,
        "no-console": "warn",
        "no-undef": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "quotes": ["error", "single"]
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.13.1"
        }
    }
}