<template>
<header id="il-header" class="il-header">
    <div class="il-container--wrapper">
        <div class="il-header--main">
            <div class="il-header--brand">
                <h1 class="il-color--text__gold"><img :src="logo" alt="logo da kaizen" title="Logo da Kaizen"></h1>
            </div>
            <div class="il-header--menu" @click.prevent="activeMenu" :class="hasActive()">
                <div class="il-menu--line"></div>
                <div class="il-menu--line"></div>
                <div class="il-menu--line"></div>
            </div>
        </div>

        <div class="il-header--content">
            <div class="il-content--portrait">
                <div class="il-avatar--portrait">
                    <div class="il-avatar"></div>
                </div>
                <span class="il-authenticated il-color--text__light" v-if="checkAuthenticated">Você está logado</span>
            </div>
            <nav class="il-content--nav">
                <ul class="il-menu--list">
                    <li class="il-menu--list__item" v-for="m in menu" :key="m.id">
                        <div v-if="!m.params">
                            <router-link class="il-menu--link il-color--text__yellow" :to="{name:m.link}" :class="isActive(m.id)" :title="m.title">
                                <span @click="hiddenMenu()">{{m.label}}</span>
                            </router-link>
                        </div>
                        <div v-else>
                            <router-link class="il-menu--link il-color--text__yellow" :to="{name:m.link, params: {plan: m.params}}" :class="isActive(m.id)" :title="m.title">
                                <span @click="hiddenMenu()">{{m.label}}</span>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
</template>

<script>
export default {
    name: 'HeaderComponent',

    data() {
        return {
            showMenu: false,
            logo: '/images/theme/logokaizen.png',
            menu: [{
                    id: 1,
                    link: 'home',
                    title: 'Comece por aqui',
                    label: 'Home',
                    icon: 'il-pilates-icon flaticon-precision-posture',
                    params: false,
                    show: true
                },
                {
                    id: 2,
                    link: 'about',
                    title: 'Saiba mais',
                    label: 'Sobre',
                    icon: 'il-pilates-icon flaticon-side-bending-posture',
                    params: false,
                    show: true
                },
                {
                    id: 3,
                    link: 'studio',
                    title: 'Esse é o nosso studio',
                    label: 'O Studio',
                    icon: 'il-pilates-icon flaticon-pilates-reformer',
                    params: false,
                    show: true
                },
                {
                    id: 4,
                    link: 'teachers',
                    title: 'Sem eles não existiriamos',
                    label: 'Os Intrutores',
                    icon: 'il-pilates-icon flaticon-twisting-arms',
                    params: false,
                    show: true
                },
                {
                    id: 5,
                    link: 'class',
                    title: 'E para isso existimos',
                    label: 'As Aulas',
                    icon: 'il-pilates-icon flaticon-pilates-chair',
                    params: false,
                    show: true
                },
                {
                    id: 6,
                    link: 'student',
                    title: 'Tudo isso para vocês',
                    label: 'Os Alunos',
                    icon: 'il-pilates-icon flaticon-exercises-with-reformer',
                    params: false,
                    show: true
                },
                {
                    id: 7,
                    link: 'advantage',
                    title: 'Como ganhamos sua confiança',
                    label: 'Vantagens',
                    icon: 'il-pilates-icon flaticon-pilates-equipment',
                    params: false,
                    show: true
                },
                {
                    id: 8,
                    link: 'contact',
                    title: 'Quer enviar uma mensagem?',
                    label: 'Contato',
                    icon: 'il-pilates-icon flaticon-centering-position',
                    params: 'message',
                    show: true
                }
            ]
        };
    },
    props: {
        authenticated: Boolean
    },
    computed: {
        checkAuthenticated() {
            if (this.authenticated) {
                return true;
            }
            return false;
        }
    },
    methods: {
        hasActive() {
            if (this.showMenu) {
                return 'radius';
            }
            return;
        },

        isActive(i) {
            let rota = this.$route.name;
            let index = i - 1;
            if (rota == this.menu[index].link) {
                return ['current'];
            }
        },

        hiddenMenu() {
            const menuLine = document.querySelectorAll('.il-menu--line');
            const header = document.getElementById('il-header');
            const headerContent = document.querySelector('.il-header--content');
            const headerPortrait = document.querySelector('.il-content--portrait');
            const headerNav = document.querySelector('.il-content--nav');
            const headerNavList = document.querySelectorAll('.il-menu--list__item');
            menuLine.forEach(item => {
                item.classList.remove('deform');
            });
            header.classList.remove('active');
            headerContent.classList.remove('il-show--header');
            headerPortrait.classList.remove('show');
            headerNav.classList.remove('show');
            headerNavList.forEach((item, k) => {
                let child = item.children[0];
                child.classList.remove('show-me' + (k + 1));
            });
            this.showMenu = false;
            this.$parent.headerActive = false;
        },

        activeMenu() {
            const headerContent = document.querySelector('.il-header--content');
            const headerPortrait = document.querySelector('.il-content--portrait');
            const header = document.getElementById('il-header');
            const headerNav = document.querySelector('.il-content--nav');
            const headerNavList = document.querySelectorAll('.il-menu--list__item');
            const menuLine = document.querySelectorAll('.il-menu--line');

            if (!this.showMenu) {
                menuLine.forEach(item => {
                    item.classList.add('deform');
                });
                header.classList.add('active');
                headerContent.classList.add('il-show--header');
                headerPortrait.classList.add('show');
                headerNav.classList.add('show');
                headerNavList.forEach((item, k) => {
                    let child = item.children[0];
                    child.classList.add('show-me' + (k + 1));
                });
                this.showMenu = true;
                this.$parent.headerActive = true;
            } else {
                menuLine.forEach(item => {
                    item.classList.remove('deform');
                });
                header.classList.remove('active');
                headerContent.classList.remove('il-show--header');
                headerPortrait.classList.remove('show');
                headerNav.classList.remove('show');
                headerNavList.forEach(item => {
                    item.classList.remove('show-me');
                });
                this.showMenu = false;
                this.$parent.headerActive = false;
            }
        }
    }
};
</script>

<style lang="scss">
</style>
