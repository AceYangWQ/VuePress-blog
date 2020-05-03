module.exports = {
    title: '杨武奇的博客',
    description: '越努力，越幸运！',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    theme: '@vuepress/vue',
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/google-analytics', {
            ga: 'UA-128189152-1'
        }]
    ],
    serviceWorker: true, // 是否开启 PWA
    themeConfig: {
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '目录',
                link: '/posts/'
            },
            {
                text: '最新文章',
                link: '/axios/'
            },
            {
                text: '关于我',
                link: '/about/'
            },
            {
                text: 'Github',
                link: 'https://github.com/AceYangWQ'
            },
            {
                text: '掘金',
                link: 'https://juejin.im/user/5897b97e2f301e00696575f0/posts'
            },
            {
                text: '知乎',
                link: 'https://www.zhihu.com/people/aceyang-73/posts',
            },
            {
                text: '其他',
                items: [
                    {
                        text: 'segmentFault',
                        link: 'https://segmentfault.com/u/king_58e4b33ca4581/articles',
                    },
                    {
                        text: '简书',
                        link: 'https://www.jianshu.com/u/25a7aa89728d',
                    },
                    {
                        text: '微博',
                        link: 'https://weibo.com/2967485537/profile?topnav=1&wvr=6'
                    },
                ]
            }
        ]
    }
}