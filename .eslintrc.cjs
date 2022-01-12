module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: ['plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'none',
                tabWidth: 4,
                useTabs: false,
                semi: false,
                singleQuote: true,
                arrowParens: 'always',
                endOfLine: 'auto'
            }
        ]
    }
}
