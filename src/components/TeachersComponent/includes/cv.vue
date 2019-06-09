<template>
<div class="il-cv" :class="getStatus">
    <a href="!#" class="il-modal--close il-color--white" @click.prevent="closeModal()">
      <i class="mdi mdi-24px mdi-close"></i>
    </a>
    <div class="il-cv--items il-color--text__light">
        <div class="il-cv--profile">
            <img :src="picture" :alt="`professora ${curriculum.profile.name}`" :title="`Professora ${curriculum.profile.name}`">
        </div>
            <div class="il-cv--name">
                <ul>
                    <li class="il-color--text__accent">{{curriculum.profile.name}}</li>
                    <li class="il-cv--sm-name">{{curriculum.profile.formation}}</li>
                    <li class="il-cv--sm-name">{{curriculum.profile.cref}}</li>
                </ul>
            </div>
            <div class="il-cv--info">
                <ul>
                    <li class="il-color--text__accent">Informações profissionais</li>
                    <li class="il-cv--sm-name">{{curriculum.info.email}}</li>
                    <li class="il-cv--sm-name">{{curriculum.info.address}}</li>
                    <li class="il-cv--sm-name">{{curriculum.info.fone}}</li>
                </ul>
            </div>
            <div class="il-cv--edu">
                <ul>
                    <li>Formação</li>
                    <li class="il-cv--sm-name">{{curriculum.graduation.colege}}</li>
                    <li class="il-color--text__gold">Outras</li>
                    <li class="il-cv--sm-name" v-for="(other,o) in curriculum.details.others" :key="`others${o}`">{{other}}</li>
                    <li class="il-color--text__gold">Cursos</li>
                    <li class="il-cv--sm-name" v-for="(curse,c) in curriculum.details.curses" :key="`curses${c}`">{{curse}}</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'cv',
    data() {
        return {};
    },
    props: {
        curriculum: Object,
        picture: String,
        status: Boolean
    },
    computed: {
        getStatus() {
            if (this.status) {
                return 'cv-show';
            } else {
                return '';
            }
        }
    },
    methods: {
        closeModal() {
            this.$parent.closeModal();
        },
        socialNetOpen(path) {
            let w = 626,
                h = 436;
            let urlFb = 'https://www.facebook.com/BusqueFilme/?ref=bookmarks';
            let urlFbShare = 'https://www.facebook.com/sharer/sharer.php?u=';
            let urlIn = 'http://instagram.com/claumuraguti?ref=badge';
            let urlGo = 'https://plus.google.com/u/0/114144280855980132006';
            let urlWap = 'https://api.whatsapp.com/send?phone=5551999767179';
            switch (path) {
                case 'wap':
                    window.open(
                        urlWap,
                        'whatsapp-share-dialog',
                        `"width=${w},height=${h}"`
                    );
                    break;
                case 'fb':
                    window.open(
                        urlFbShare + encodeURIComponent(urlFb),
                        'fb-follow',
                        `"width=${w},height=${h}"`
                    );
                    break;
                case 'in':
                    window.open(
                        urlIn,
                        'instagram-share-dialog',
                        `"width=${w},height=${h}"`
                    );
                    break;
                case 'go':
                    window.open(urlGo, 'google-share-dialog', `"width=${w},height=${h}"`);
                    break;
            }
        }
    }
};
</script>
