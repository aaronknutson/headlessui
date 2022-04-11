module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
    "prettier",
  ],
  rules: {
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
  },
};
