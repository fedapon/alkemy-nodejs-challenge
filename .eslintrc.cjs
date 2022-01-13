module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: ['prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error'
    }
}
