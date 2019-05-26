export default [
  // user login
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // 今日热点
      {
        path: '/hot',
        icon: 'fire',
        name: 'hot',
        routes: [
          {
            path: '/hot/articles',
            name: 'hotarticles',
            component: './Hot/Articles',
          },
          {
            path: '/hot/projects',
            name: 'hotprojects',
            component: './Hot/Projects',
          },
          {
            path: '/hot/applications',
            name: 'hotapplications',
            component: './Hot/Applications',
          },
        ],
      },
      //我的发布
      {
        path: '/publish',
        icon: 'container',
        name: 'publish',
        routes: [
          {
            path: '/publish/writings',
            name: 'writings',
            component: './Publish/Writings',
          },
          {
            path: '/publish/project',
            name: 'project',
            component: './Publish/Project',
          },
          {
            path: '/publish/application',
            name: 'application',
            component: './Publish/Application',
          },
        ],
      },
      //后台管理
      {
        path: '/management',
        icon: 'audit',
        name: 'management',
        routes: [
          {
            path: '/management/peoplemanagement',
            name: 'peoplemanagement',
            component: './Management/Peoplemanagement',
          },
          {
            path: '/Management/articlesmanagement',
            name: 'articlesmanagement',
            component: './Management/Articlesmanagement',
          },
          
        ],
      },
      // user 个人页
      { path: '/', redirect: '/hot/articles', authority: ['admin', 'user'] },
      {
        name: 'account',
        icon: 'setting',
        path: '/account',
        routes: [
          {
            path: '/account/center', //个人中心
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          }, //个人设置
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },

      {
        component: '404',
      },
    ],
  },
];
