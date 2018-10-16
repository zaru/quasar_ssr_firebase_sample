
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Index.vue'), meta: { requiresAuth: false } },
      { path: 'auth', name: 'Auth', component: () => import('pages/Auth.vue'), meta: { requiresAuth: false } },
      { path: 'posts', name: 'Post', component: () => import('pages/Posts.vue'), meta: { requiresAuth: false } },
      { path: 'signup', name: 'SignUp', component: () => import('pages/SignUp.vue'), meta: { requiresAuth: false } },
      { path: 'register', name: 'Register', component: () => import('pages/Register.vue'), meta: { requiresAuth: false } },
      { path: 'mypage', name: 'MyPage', component: () => import('pages/MyPage.vue'), meta: { requiresAuth: true } }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
