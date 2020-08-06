module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
  },
  plugins: ["react"],
  rules: {
    "consistent-return": "off",
    "no-unused-vars": "off",
    "prefer-destructuring": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "object-shorthand": "off",
    "react/jsx-filename-extension": [1, {extensions: [".js", ".jsx"]}],
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/alt-text": 0,
    "react/destructuring-assignment": 0,
    "react/no-unescaped-entities": 0,
    "no-nested-ternary": 0,
  },
};
