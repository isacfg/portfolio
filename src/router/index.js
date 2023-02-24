import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contato'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: 'Projetos'
      }
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
      meta: {
        title: 'Projeto'
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignInView.vue'),
      meta: {
        title: 'Entrar',
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/dashboard/add',
      name: 'add-project',
      component: () => import('../views/AddProjectView.vue'),
      meta: {
        title: 'Adicionar projeto',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: 'Página não encontrada',
      },
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Isaac F.`
  next()
})

export default router
