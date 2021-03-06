module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true
    },
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react', 'import', 'jsx-a11y', 'jest'],
    rules: {
        strict: 0,
        'no-alert': 'error',
        'no-else-return': 'warn',
        curly: 'error',
        'dot-notation': 'warn',
        'no-loop-func': 'error',
        'no-useless-return': 'warn',
        'no-undef-init': 'warn',
        'no-use-before-define': 'error',
        'block-spacing': 'warn',
        camelcase: 'warn',
        'key-spacing': 'warn',
        'new-parens': 'warn',
        'no-lonely-if': 'warn',
        'no-multiple-empty-lines': 'warn',
        'no-nested-ternary': 'error',
        'no-trailing-spaces': 'warn',
        'no-whitespace-before-property': 'error',
        'space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'switch-colon-spacing': 'warn',
        'arrow-spacing': 'warn',
        'generator-star-spacing': 'warn',
        'no-duplicate-imports': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'prefer-const': 'warn',
        'prefer-template': 'warn',
        'react/jsx-first-prop-new-line': ['warn', 'never'],
        'react/jsx-closing-bracket-location': ['warn', 'after-props'],
        'react/jsx-max-props-per-line': ['warn', { when: 'multiline' }],
        'react/jsx-curly-spacing': [
            'warn',
            {
                when: 'always',
                children: true,
                spacing: { objectLiterals: 'always' }
            }
        ],
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true
            }
        ],
        'space-in-parens': ['warn', 'never'],
        'space-before-function-paren': ['warn', 'never'],
        'object-curly-spacing': ['warn', 'always'],
        'operator-linebreak': ['warn', 'after'],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['warn', 'single'],
        semi: ['error', 'never'],
        'arrow-parens': ['error', 'always'],
        'jsx-quotes': ['warn', 'prefer-double'],
        'max-len': [
            'error',
            120,
            4,
            {
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreRegExpLiterals: true
            }
        ],
        'array-bracket-spacing': ['warn', 'never'],
        'brace-style': ['warn', 'stroustrup'],
        'comma-spacing': [
            'warn',
            {
                before: false,
                after: true
            }
        ],
        'comma-style': ['warn', 'last'],
        'eol-last': ['warn', 'always'],
        'keyword-spacing': [
            'warn',
            {
                before: true
            }
        ]
    }
}
