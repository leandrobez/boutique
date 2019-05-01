<template>
<div class="il-cv--contents">
    <section id="il-instructor" class="il-section il-section--instructor">
        <div class="il-container--wrapper">
            <h1 class="il-section--title">Os <span class="il-color--text__very-light">Instrutores</span></h1>
            <h2 class="il-section--sub-title il-color--text__very-light text-right">Professores da {{$parent.title}}</h2>

            <div class="il-instructor--content">
                <ilCards v-for="(instructor, index) in instructors" :key="instructor.id" :title="instructor.title" :message="instructor.message" :picture="instructor.picture" :id="index" />
            </div>
        </div>

    </section>
    <div class="il-container--wrapper">
      <ilCv v-if="checkCV" :curriculum="getCurriculum()" :status="CV.show" :picture="CV.picture" />
    </div>
</div>
</template>

<script>
import instructors from '../../common/instructors';
import ilCards from './includes/cards.vue';
import ilCv from './includes/cv.vue';
export default {
  name: 'Teachers',
  components: {
    ilCards,
    ilCv
  },
  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-twisting-arms',
      CV: {
        index: 0,
        id: null,
        teacher: null,
        picture: null,
        show: false
      },
      instructors: []
    };
  },
  mounted() {
    this.instructors = instructors;
  },
  computed: {
    checkCV() {
      if (this.CV.show) {
        return true;
      }
      return false;
    }
  },
  methods: {
    getCurriculum() {
      let index = this.CV.index;
      return instructors[index].cv;
    },
    showCV(index) {
      this.CV.index = index;
      this.CV.id = this.instructors[index].id;
      this.CV.teacher = this.instructors[index].title;
      this.CV.picture = this.instructors[index].picture;
      this.CV.show = true;
    },
    closeModal() {
      this.CV.index = 0;
      this.CV.id = null;
      this.CV.teacher = null;
      this.CV.picture = null;
      this.CV.show = false;
    }
  }
};
</script>
