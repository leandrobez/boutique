<template>
<div class="il-footer--content">
	<div class="il-footer--top" :class="getClass()">
		<div class="il-container--wrapper">
			<div class="il-footer--breadcrumb il-color--text__very-light">
				<i :class="whatIcon"></i>
				<span class="il-path">{{whereIAm}}</span>
			</div>
		</div>

		<div class="il-footer--cols il-color--text__very-light">
			<div class="il-footer-col">
				<h4 class="il-footer--title">
					<i class="mdi mdi-24px mdi-camera-iris"></i>
          <router-link :to="{name:'galleryStudio'}" class="il-footer--list il-color--text__very-light" title="Veja fotos do studio">studio</router-link>
				</h4>
			</div>

			<div class="il-footer-col">
				<h4 class="il-footer--title">
					<i class="mdi mdi-24px mdi-camera-rear"></i>
          <router-link :to="{name:'galleryEvents'}" class="il-footer--list il-color--text__very-light" title="Veja fotos de eventos">eventos</router-link>
				</h4>
			</div>

			<div class="il-footer-col">
				<h4 class="il-footer--title">
					<i class="mdi mdi-24px mdi-camera-party-mode"></i>
					<a href="#!" class="il-footer--list il-color--text__very-light"  title="Veja fotos do studio">cursos</a>
				</h4>
			</div>

			<div class="il-footer-col">
				<h4 class="il-footer--title">
					<i class="mdi mdi-24px mdi-email"></i>
					<a href="#!" class="il-footer--list il-color--text__very-light" @click.prevent="activeModal('Contato')" title="Faça contato com a gente">contato</a>
				</h4>
			</div>
		</div>
	</div>

	<div class="il-footer--bottom">
		<div class="il-footer--copy">
			<span class="il-color--text__light">design by <a href="http://www.internetlojas.com" target="_blank" class="il-color--text__very-light">www.internetlojas.com</a></span>
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
          this.whereIAm = 'about';
          this.whatIcon = 'il-pilates-icon flaticon-side-bending-posture';
          break;
        case 'studio':
          currentFooter = 'il-studio';
          this.whereIAm = 'studio';
          this.whatIcon = 'il-pilates-icon flaticon-pilates-reformer';
          break;
        case 'teachers':
          currentFooter = 'il-teacher';
          this.whereIAm = 'professores';
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
        case 'video':
          currentFooter = 'il-video';
          this.whereIAm = 'videos';
          this.whatIcon = 'il-pilates-icon flaticon-exercise-bands';
          break;
        default:
          currentFooter = 'il-home';
          this.whereIAm = 'home';
          this.whatIcon = 'il-pilates-icon flaticon-precision-posture';
      }
      return currentFooter;
    },

    activeModal(title){
      this.$parent.modal.title = title;
      this.$parent.modal.content = 'Aguardamos seu contato. Preencha o formulário';
      this.$parent.showModal = true
    }

  }
};
</script>
