module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    //规则继承
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    //特定类型文件
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    //解析器
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",//指定解析器
        "sourceType": "module"
    },
    //插件
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {

    }
}
