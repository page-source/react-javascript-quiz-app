module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 0,
    semi: 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'comma-dangle': 'off',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'newline-per-chained-call': 'error',
    'lines-between-class-members': ['error', 'always'],
    quotes: 'off',
    'no-multi-str': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'multiline-block-like',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'multiline-block-like',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
        ],
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'ignore',
      },
    ],
    'comma-style': ['error', 'last'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreStrings: true,
      },
    ],
    'react/no-unescaped-entities': 'off',
    'multiline-comment-style': 'off',
    'operator-linebreak': 'off',
    'rest-spread-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'keyword-spacing': 'error',
    curly: 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'no-nested-ternary': 'error',
    'space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],
    'max-depth': ['error', 3],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    'arrow-spacing': 'error',
    'no-template-curly-in-string': 'error',
    'block-scoped-var': 'error',
    eqeqeq: 'error',
    'no-implicit-globals': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    yoda: 'error',
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'no-multi-assign': 'error',
    'padded-blocks': ['error', 'never'],
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'react/display-name': 'off',
    'lines-around-comment': [
      'error',
      {
        beforeLineComment: true,
        allowBlockStart: true,
      },
    ],
    'no-else-return': [
      'error',
      {
        allowElseIf: false,
      },
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'react/jsx-boolean-value': 'error',
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-newline': 'off',
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 2,
        when: 'always',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        return: 'parens-new-line',
        assignment: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/jsx-one-expression-per-line': [
      'off',
      {
        allow: 'single-child',
      },
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'jsx-curly-spacing': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
      },
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
