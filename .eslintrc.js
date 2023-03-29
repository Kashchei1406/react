module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        'react/jsx-indent':[2, 2],
        'indent': [2, 2],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", 'tsx'] }],
        'import/no-unresolved': 'off',
        "no-unused-vars": "warn",
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-shadow': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        "no-tabs": ["error", { 'allowIndentationTabs': true }],
        'react/jsx-props-no-spreading': 'warn',
        'max-len': 'off',
        'no-underscore-dangle': "warn",
        'import/no-extraneous-dependencies': 'warn'

    },

    globals: {
        '__IS_DEV__': true,
    }
};
