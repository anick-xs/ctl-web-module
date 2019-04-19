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
                       ['/form/input', 'input 输入框'],
                       ['/form/inputRange', 'inputRange 范围输入框'],
                       ['/form/select', 'select 选择器'],
                       ['/form/cascade', 'cascade 级联选择器'],
                       ['/form/radioAndInput', 'radioAndInput 单选和输入框组合'],
                       ['/form/radio', 'radio 单选框'],
                       ['/form/checkbox', 'checkbox 多选框'],
                       ['/form/image', 'image 图片'],
                   ]
               }
           ]
       }
    }
};
