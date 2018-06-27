import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const Blog = () => import('../node_modules/@nuxtjs/blog/src/app/pages/Blog.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const Tag = () => import('../node_modules/@nuxtjs/blog/src/app/pages/Tag.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const Collection = () => import('../node_modules/@nuxtjs/blog/src/app/pages/Collection.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const Article = () => import('../node_modules/@nuxtjs/blog/src/app/pages/Article.vue' /* webpackChunkName: "" */).then(m => m.default || m)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: "/",
        component: Index,
        redirect: '/blog'
      },
      {
        path: "/blog",
        component: Blog,
        name: "@nuxtjs/blog:index"
      },
      {
        path: "/blog/pages/:page",
        component: Blog,
        name: "@nuxtjs/blog:page"
      },
      {
        path: "/blog/tags/:id/:page?",
        component: Tag,
        name: "@nuxtjs/blog:tag"
      },
      {
        path: "/blog/collections/:id/:page?",
        component: Collection,
        name: "@nuxtjs/blog:collection"
      },
      {
        path: "/blog/:collection?/:id",
        component: Article,
        name: "@nuxtjs/blog:article"
      }
    ]
  })
}