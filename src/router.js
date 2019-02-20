import Vue from 'vue';
import Router from 'vue-router';

/**componente do client**/
import Home from './components/HomeComponent/home.vue';
import Curriculum from './components/CurriculumComponent/curriculum.vue';
import About from './components/AboutComponent/about.vue';
import Studio from './components/StudioComponent/studio.vue';
import Teacher from './components/TeachersComponent/teachers.vue';
import Class from './components/ClassComponent/class.vue';
import Student from './components/StudentsComponent/students.vue';
import Advantage from './components/AdvantangesComponent/advantages.vue';
import Video from './components/VideosComponent/videos.vue';
import Albuns from './components/AlbunsComponent/albuns.vue';
import Gallery from './components/GalleryComponent/GalleryComponent.vue';
import studioGallery from './components/GalleryComponent/includes/studioGallery.vue';
import eventsGallery from './components/GalleryComponent/includes/eventsGallery.vue';
import formSubmission from './components/includes/SubmissionForms.vue';
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
      path: '/curriculum',
      name: 'curriculum',
      component: Curriculum
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
      path: '/albuns',
      name: 'albuns',
      component: Albuns
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      children: [
        {
          path: 'studio',
          name: 'galleryStudio',
          component: studioGallery
        },
        {
          path: 'events',
          name: 'galleryEvents',
          component: eventsGallery
        }
      ]
    },
    {
      path: '/email/:type',
      name: 'email',
      component: formSubmission
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
