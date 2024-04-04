module.exports = {
    //ignores: [(commit) => commit.includes('init')],
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum':[
            2,
            'always',
            [
                'feat',//新特性
                'fix',
                'docs',
                'style',
                'refactor',//代码重构
                'perf',//优化
                'test',//测试
                'chore',//其他修改
                'revert',//回滚
                'build',//编译修改
                'lint'//规则
            ]
        ],
      'body-leading-blank': [2, 'always'],
      'footer-leading-blank': [1, 'always'],
      'header-max-length': [2, 'always', 108],
      'subject-empty': [2, 'never'],
      'type-empty': [2, 'never'],
      'subject-case': [0],
    },
  }