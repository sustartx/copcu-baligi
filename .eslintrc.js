module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/prettier",

        // 'plugin:vue/essential',
        // '@vue/standard',
        // 'plugin:vue/vue3-strongly-recommended',
        // 'plugin:vue/strongly-recommended',
        // 'plugin:vue/vue3-recommended',
        // 'plugin:vue/recommended'
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["error", 4],
        "vue/multi-word-component-names": "off",
        // "vue/script-indent": ["error", 4, { baseIndent: 1 }],
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                mocha: true,
            },
        },
    ],
};
