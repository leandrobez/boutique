<template>
<div class="il-cv--contents">
    <section id="il-instructor" class="il-section il-section--instructor">
        <div class="il-container--wrapper">
            <h1 class="il-section--title il-title--full">Os <span class="il-color--text__very-light">Instrutores</span></h1>
            <h2 class="il-section--sub-title il-color--text__very-light text-right">Professores da {{$parent.title}}</h2>

            <div class="il-instructor--content">
                <ilCards v-for="instructor in instructors" :key="instructor.id" :id="instructor.cv" :title="instructor.title" :message="instructor.message" :picture="instructor.picture" />
            </div>
        </div>
        
    </section>
    <ilCv v-for="cv in instructors" v-show="cv.show" :key="`${cv.id}_cv`" :id="`cv_${cv.id}`" />
</div>
</template>

<script>
import ilCards from "./includes/cards.vue";
import ilCv from "./includes/cv.vue";
export default {
  name: "Teachers",
  components: {
    ilCards,
    ilCv
  },
  data() {
    return {
      whatIcon: "il-pilates-icon flaticon-twisting-arms",
      CV: {
        id: null,
        teacher: null,
        show: false
      },
      instructors: [
        {
          id: "1",
          title: "NhaNhann",
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          picture: "images/pictures/teacher1.jpg",
          show: false,
          cv: 0
        },
        {
          id: "2",
          title: "Blublue",
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          picture: "images/pictures/teacher2.jpg",
          show: false,
          cv: 1
        },
        {
          id: "3",
          title: "RamiRami",
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          picture: "images/pictures/teacher3.jpg",
          show: false,
          cv: 2
        }
      ]
    };
  },
  methods: {
    showCV(index) {
      this.instructors[index].show = true;
    }
  }
};
</script>
