module.exports = {

    "root": true,
    "env": {
        "node": true,
        "es6": true
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        
    },
    extends: [
        'eslint:recommended',
        "prettier",
        
    ],
    "rules": {
        "no console": "error",
    }

};
