import Vue from 'vue';
import Router from 'vue-router';

/**componente do client**/
import Home from './components/HomeComponent/home.vue';
import About from './components/AboutComponent/about.vue';
import Studio from './components/StudioComponent/studio.vue';
import Teacher from './components/TeachersComponent/teachers.vue';
import Class from './components/ClassComponent/class.vue';
import Student from './components/StudentsComponent/students.vue';
import Advantage from './components/AdvantangesComponent/advantages.vue';
import Video from './components/VideosComponent/videos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/studio',
      name: 'studio',
      component: Studio
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: Teacher
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/advantage',
      name: 'advantage',
      component: Advantage
    },
    {
      path: '/videos',
      name: 'video',
      component: Video
    },
    {
      path: '*',
      redirect: '/'
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" * './views/About.vue')
    //}*/
  ]
});
