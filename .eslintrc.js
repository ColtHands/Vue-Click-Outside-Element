module.exports = {
    extends: '@coldhands',
    plugins: ['jest'],
    settings: {
        jest: {
            version: require('jest/package.json').version
        }
    },
    env: {
        'jest/globals': true
    }
}