<template>
<footer id="il-footer" class="il-footer" :class="getClass()">

    <div class="il-footer--content">
        <div class="il-footer--top">
            <div class="il-container--wrapper">
              <div class="il-footer--breadcrumb">
                <i :class="whatIcon"></i>
                <span class="il-path">{{whereIAm}}</span>
              </div>
                <div class="il-footer--cols">
                    <div class="il-footer--col">
                     
                        <h4 class="il-footer--title">
                           <i class="mdi mdi-24px mdi-camera-iris il-color--text__light"></i>
                          <a href="#" class="il-footer--list" title="Veja fotos do studio">studio</a></h4>
                    </div>
                    <div class="il-footer--col">
                        <h4 class="il-footer--title">
                          <i class="mdi mdi-24px mdi-camera-rear il-color--text__light"></i>
                          <a href="#" class="il-footer--list" title="Veja fotos de eventos">eventos</a></h4>
                    </div>
                    <div class="il-footer--col">
                        <h4 class="il-footer--title">
                          <i class="mdi mdi-24px mdi-camera-party-mode il-color--text__light"></i>
                          <a href="#" class="il-footer--list" title="Veja fotos de cursos">cursos</a></h4>
                    </div>
                    <div class="il-footer--col">
                        <h4 class="il-footer--title">
                          <i class="mdi mdi-24px mdi-email il-color--text__light"></i>
                          <a href="#" class="il-footer--list" title="Aguardamos seu contato">contato</a></h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="il-footer--bottom">
            <div class="il-container--wrapper">bottom</div>
        </div>
    </div>

</footer>
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
          currentFooter = 'il-footer--home';
          this.whereIAm = 'home';
          this.whatIcon = 'il-pilates-icon flaticon-precision-posture';
          break;
        case 'about':
          currentFooter = 'il-footer--about';
          this.whereIAm = 'about';
          this.whatIcon = 'il-pilates-icon flaticon-side-bending-posture';
          break;
        case 'studio':
          currentFooter = 'il-footer--studio';
          this.whereIAm = 'studio';
          this.whatIcon = 'il-pilates-icon flaticon-pilates-reformer';
          break;
        case 'teachers':
          currentFooter = 'il-footer--teacher';
          this.whereIAm = 'professores';
          this.whatIcon = 'il-pilates-icon flaticon-twisting-arms';
          break;
        case 'class':
          currentFooter = 'il-footer--class';
          this.whereIAm = 'aulas';
          this.whatIcon = 'il-pilates-icon flaticon-exercises-with-chair';
          break;
        case 'student':
          currentFooter = 'il-footer--student';
          this.whereIAm = 'alunos';
          this.whatIcon = 'il-pilates-icon flaticon-exercises-with-reformer';
          break;
        case 'advantage':
          currentFooter = 'il-footer--advantage';
          this.whereIAm = 'vantagens';
          this.whatIcon = 'il-pilates-icon flaticon-pilates-equipment';
          break;
        case 'video':
          currentFooter = 'il-footer--video';
          this.whereIAm = 'videos';
          this.whatIcon = 'il-pilates-icon flaticon-exercise-bands';
          break;
        default:
          currentFooter = 'il-footer--home';
          this.whereIAm = 'home';
          this.whatIcon = 'il-pilates-icon flaticon-precision-posture';
      }
      this.showFooter();
      return currentFooter;
    },

    showFooter() {
      setTimeout(() => {
        const showClass = document.getElementById('il-footer');
        showClass.classList.add('il-footer--show');
      }, 1200);
    }
  }
};
</script>
