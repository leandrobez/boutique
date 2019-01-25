<template>
<div class="il-container--wrapper">
    <section id="il-student" class="il-section il-section--student">
        <h1 class="il-section--title">
            <!--<i :class="whatIcon"></i>-->Os <span class="il-color--text__gold">Alunos</span></h1>
        <h2 class="il-section--sub-title">Tudo isso é para eles</h2>
    </section>
    <section class="il-section il-section--about__content">
        <div class="il-space--content il-color--background__verylight">
            <h3 class="il-section--title__small il-color--text__dark">Vocês são os protagonistas</h3>
            <p class="il-color--text__dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, repellat hic. In eligendi rerum fuga soluta ipsam facere quam, architecto vel repellendus ducimus modi accusantium nostrum saepe dolorum ratione. Accusamus?.</p>
        </div>
    </section>

    <section id="il-depoiments" class="il-section il-section--depoiments">
        <h3 class="il-section--title__small il-color--text__dark">Com a palavra os alunos:</h3>
        <div class="il-depoiments--navigation">
            <i id="nav-left" class="mdi mdi-24px mdi-arrow-left-drop-circle" @click.prevent="move('left')"></i>
            <i id="nav-right" class="mdi mdi-24px mdi-arrow-right-drop-circle" @click.prevent="move('right')"></i>
        </div>

        <div class="il-depoiments--slider">
            <div class="il-depoiment--item">
                <div class="il-item--picture">
                    <img :src="students[0].picture" alt="" class="il-img--medium il-img--circle">
                 </div>
                    <div class="il-item--social">
                        <a href="#" class="il-styles--social__link"><i class="mdi mdi-24px mdi-facebook il-color--text_lighten"></i></a>
                        <a href="#" class="il-styles--social__link"><i class="mdi mdi-24px mdi-twitter il-color--text_lighten"></i></a>
                        <a href="#" class="il-styles--social__link"><i class="mdi mdi-24px mdi-pinterest il-color--text_lighten"></i></a>
                    </div>
                    <div class="il-item--info">
                        <div class="il-info--caption">
                            <span>{{students[0].name}}</span>
                        </div>
                    </div>
                </div>
            
            <div class="il-depoiment--item">
                <div class="il-item--picture">
                    <img :src="students[1].picture" alt="" class="il-img--medium il-img--circle">
                </div>
                <div class="il-item--social">
                    <a href="#" class="il-styles--social__link"><i class="mdi mdi-24px mdi-facebook il-color--text_lighten"></i></a>
                    <a href="#" class="il-styles--social__link"><i class="mdi mdi-24px mdi-twitter il-color--text_lighten"></i></a>
                    <a href="#" class="il-styles--social__link"><i class="mdi mdi-24px mdi-pinterest il-color--text_lighten"></i></a>
                </div>
                <div class="il-item--info">
                    <div class="il-info--caption">
                        <span>{{students[1].name}}</span>
                    </div>
                </div>
        </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Student',

    data() {
        return {
            whatIcon: 'il-pilates-icon flaticon-exercises-with-reformer',
            init: 0,
            time: 8000,
            students: [{
                    name: 'Aluno 1',
                    picture: 'images/pictures/avatar1.jpg'
                },
                {
                    name: 'Aluno 2',
                    picture: 'images/pictures/avatar2.jpg'
                }
            ]
        };
    },

    mounted() {
        this.runSliders();
    },

    methods: {
        move(side) {
            if (side == 'left') {}
        },

        runSliders() {
            const styles = document.querySelectorAll('.il-depoiment--item');
            let count = styles.length;

            let vm = this;
            const nextEl = (index, styles, vm) => {
                console.log(styles);
                let init = vm.init;

                let classActive = 'il-item--active';
                if (index < count) {

                    styles[index].classList.add(classActive);
                    for (let i = 0; i < count; i++) {
                        if (i !== index) {
                            let el = styles[i];
                            if (el.hasAttribute('class') && el.classList.contains(classActive)) {
                                el.classList.remove(classActive);
                            }
                        }
                    }
                } else {
                    vm.init = 0;
                    init = 0;
                    styles[init].classList.add(classActive);
                    styles[count - 1].classList.remove(classActive);
                }
            };
            /**temporizador */
            //
            setInterval(() => {
                nextEl(vm.init, styles, vm);
                vm.init++;
            }, vm.time);
        }
    }
};
</script>
