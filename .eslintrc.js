// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        'no-mixed-spaces-and-tabs': ["error", "smart-tabs"]
    },
    env: {
        browser: true
    },
    globals:{
        "api":true,
        "vm":true,
        'localHandle':true,
        'cookies':true,
        'cache': true,
        'AMap': true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        "no-unused-vars": [2, {
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none"
        }],
        "no-var": 0,//禁用var，用let和const代替
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                'baseIndent': 1
            }
        ]
    },
}
