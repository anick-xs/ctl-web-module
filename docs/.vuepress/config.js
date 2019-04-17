module.exports = {
    title: '前端组件文档',  // 设置网站标题
    description : '爱用不用',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    serviceWorker: true,
    themeConfig: {
        //导航栏
        nav: [
            { text: 'Home', link: '/' },
            { text: '组件', link: '/form/form' },
        ],
       //侧边栏
       sidebar:{
           '/form': [
               {
                   title:'表单',
                   collapsable: true,
                   children: [
                       ['/form/form', 'form'],
                       ['/form/input', 'input'],
                   ]
               }
           ]
       }
    }
};
