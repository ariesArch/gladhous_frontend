module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
/* eslint-disable indent */
  // add your custom rules here
  rules: {
    indent: ['error', 4],
    'jsx-quotes': [2, 'prefer-single'],
    semi: ['error', 'always'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-prop-types': 'off'
  }
};
