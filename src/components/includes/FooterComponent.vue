<template>
<div class="il-footer--content">
    <div class="il-footer--top" :class="getClass()">

        <div class="il-footer--breadcrumb">
            <div class="il-container--wrapper">
                <!--<i :class="whatIcon"></i>-->
                <span class="il-path il-color--text__gold">{{whereIAm}}</span>
            </div>
        </div>

        <div class="il-footer--cols il-color--text__light">
            <div class="il-footer--col">
                <h4 class="il-footer--title">
                    <i class="mdi mdi-24px mdi-camera-iris"></i>
                    <router-link :to="{name:'gallery.studio'}" class="il-footer--list il-color--text__light" title="Veja fotos do studio">studio</router-link>
                </h4>
            </div>
        <!--<div class="il-footer--col">
              <h4 class="il-footer--title">
                <i class="mdi mdi-24px mdi-camera-rear"></i>
                <router-link :to="{name:'galleryEvents'}" class="il-footer--list il-color--text__light" title="Veja fotos de eventos">eventos</router-link>
              </h4>
            </div>-->
            <div class="il-footer--col">
                <h4 class="il-footer--title">
                    <i class="mdi mdi-24px mdi-camera-party-mode"></i>
                    <router-link :to="{name: 'curse'}" class="il-footer--list il-color--text__light" title="Calendário de cursos">cursos</router-link>
                </h4>
            </div>

            <div class="il-footer--col">
                <h4 class="il-footer--title">
                    <i class="mdi mdi-24px mdi-email"></i>
                    <router-link :to="{name:'contact', params: {plan: 'message'}}" class="il-footer--list il-color--text__light" title="Faça contato com a gente">contato</router-link>
                </h4>
            </div>
        </div>
    </div>

    <div class="il-footer--bottom" :class="getClass()">
        <div class="il-footer--copy">
            <span class="il-color--text__light-grey">design by <a href="http://www.internetlojas.com" target="_blank" class="il-color--text__light-grey">www.internetlojas.com</a></span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      whereIAm: '',
      whatIcon: ''
    };
  },

  methods: {
    getClass() {
      let routeName = this.$route.name;
      let currentFooter = '';
      switch (routeName) {
        case 'home':
          currentFooter = 'il-home';
          this.whereIAm = 'home';
          this.whatIcon = 'il-pilates-icon flaticon-precision-posture';
          break;
        case 'curriculum':
          currentFooter = 'il-curriculum';
          this.whereIAm = 'curriculum';
          this.whatIcon = 'il-pilates-icon flaticon-precision-posture';
          break;
        case 'about':
          currentFooter = 'il-about';
          this.whereIAm = 'sobre';
          this.whatIcon = 'il-pilates-icon flaticon-side-bending-posture';
          break;
        case 'studio':
          currentFooter = 'il-studio';
          this.whereIAm = 'studio';
          this.whatIcon = 'il-pilates-icon flaticon-pilates-reformer';
          break;
        case 'teachers':
          currentFooter = 'il-teacher';
          this.whereIAm = 'instrutores';
          this.whatIcon = 'il-pilates-icon flaticon-twisting-arms';
          break;
        case 'class':
          currentFooter = 'il-class';
          this.whereIAm = 'aulas';
          this.whatIcon = 'il-pilates-icon flaticon-exercises-with-chair';
          break;
        case 'student':
          currentFooter = 'il-student';
          this.whereIAm = 'alunos';
          this.whatIcon = 'il-pilates-icon flaticon-exercises-with-reformer';
          break;
        case 'advantage':
          currentFooter = 'il-advantage';
          this.whereIAm = 'vantagens';
          this.whatIcon = 'il-pilates-icon flaticon-pilates-equipment';
          break;
        case 'curse':
          currentFooter = 'il-curse';
          this.whereIAm = 'Cursos';
          this.whatIcon = 'il-pilates-icon flaticon-pilates-equipment';
          break;
        case 'videos':
          currentFooter = 'il-video';
          this.whereIAm = 'videos';
          this.whatIcon = 'il-pilates-icon flaticon-exercise-bands';
          break;
        case 'contact':
          currentFooter = 'il-contact';
          this.whereIAm = 'contato';
          this.whatIcon = 'il-pilates-icon flaticon-exercise-bands';
          break;
        default:
          currentFooter = 'il-home';
          this.whereIAm = 'home';
          this.whatIcon = 'il-pilates-icon flaticon-precision-posture';
      }
      return currentFooter;
    },

    activeModal() {
      this.$parent.showModal = true;
    }
  }
};
</script>
