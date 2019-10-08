<template>
<div class="il-container--wrapper">
    <section class="il-section il-section--instructor" v-if="checkIntructors">
        <div class="il-card--teacher" v-for="(instructor,index) in instructors" :key="instructor.id">
            <header>
                <div class="il-card--image">
                    <img :src="instructor.picture" alt="">
                </div>
                <h3>{{instructor.title}}</h3>
            </header>
            <div class="il-card--body">
                <p>{{instructor.message}}</p>
            </div>
            <div class="il-card--footer">
                <a href="#!" class="il-btn il-btn--vc" @click.prevent="setCv(index)">curriculo</a>
            </div>
        </div>

        <div class="il-cv" v-if="checkCV">
            <a href="#!" title="Fechar Currículo" @click.prevent="closeModal">fechar</a>
            <div class="il-cv--content">
                <div class="il-cv--profile">
                    <img :src="CV.avatar" :alt="CV.teacher" :title="CV.teacher">
                </div>
                <div class="il-cv--info">
                    <ul>
                        <li class="il-color--text__accent">{{instructors[CV.index].cv.profile.name}}</li>
                        <li class="il-cv--sm-name">{{instructors[CV.index].cv.profile.formation}}</li>
                        <li class="il-cv--sm-name">{{instructors[CV.index].cv.profile.cref}}</li>
                        <li class="il-color--text__accent">Informações profissionais</li>
                        <li class="il-cv--sm-name">{{instructors[CV.index].cv.info.email}}</li>
                        <li class="il-cv--sm-name">{{instructors[CV.index].cv.info.address}}</li>
                        <li class="il-cv--sm-name">{{instructors[CV.index].cv.info.fone}}</li>
                        <li>Formação</li>
                        <li class="il-cv--sm-name">{{instructors[CV.index].cv.graduation.colege}}</li>
                        <li class="il-sub-title">Outras</li>
                        <li class="il-cv--sm-name" v-for="(other,o) in instructors[CV.index].cv.details.others" :key="`others${o}`">{{other}}</li>
                        <li class="il-sub-title">Cursos</li>
                        <li class="il-cv--sm-name" v-for="(curse,c) in instructors[CV.index].cv.details.curses" :key="`curses${c}`">{{curse}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import instructors from '../../common/instructors';
export default {
    name: 'Teachers',
    data() {
        return {
            whatIcon: 'il-pilates-icon flaticon-twisting-arms',
            CV: {
                index: 0,
                id: null,
                teacher: null,
                picture: null,
                avatar: null,
                show: false
            },
            instructors: []
        };
    },
    mounted() {
        this.instructors = instructors;
    },
    computed: {
        checkIntructors() {
            if (this.instructors.length > 0) {
                return true;
            }
            return false;
        },
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
        setCv(index) {
            this.CV.show = false;
            this.CV.index = index;
            this.CV.id = this.instructors[index].id;
            this.CV.teacher = this.instructors[index].title;
            this.CV.picture = this.instructors[index].picture;
            this.CV.avatar = this.instructors[index].cv.profile.avatar;
            this.CV.show = true;
        },
        closeModal() {
            this.CV.index = 0;
            this.CV.id = null;
            this.CV.teacher = null;
            this.CV.picture = null;
            this.CV.avatar = null;
            this.CV.show = false;
        }
    }
};
</script>
