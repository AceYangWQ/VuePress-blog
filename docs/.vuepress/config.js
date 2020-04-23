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
                link: ''
            },
            {
                text: '掘金',
                link: ''
            },
            {
                text: '知乎',
                link: '',
            },
            {
                text: '其他',
                items: [
                    {
                        text: 'segmentFault',
                        link: '',
                    },
                    {
                        text: '简书',
                        link: '',
                    },
                    {
                        text: '微博',
                        link: ''
                    },
                ]
            }
        ]
    }
}