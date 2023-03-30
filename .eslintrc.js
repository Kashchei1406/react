module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        "react/jsx-filename-extension": [2, {extensions: ['.js', '.jsx', 'tsx']}],
        "no-unused-vars": "warn",
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-tabs': ["error", {'allowIndentationTabs': true}],
        'react/jsx-props-no-spreading': 'warn',
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'react/require-default-props': 'off',
        'max-len': 'off',
        'newline-before-return': 'off',
        'no-underscore-dangle': 'warn',
        'import/no-extraneous-dependencies': 'warn',
        'react/jsx-first-prop-new-line': [2, "multiline"],
        "i18next/no-literal-string": ['error', ]


    },

    globals: {
        __IS_DEV__: true,
    },
};
