<template>
<div :class="`il-plan il-plan--${id} il-color--background__lighten`">
    <h2 class="il-color--text__dark">{{condicions}} X Semana</h2>
    <p class="il-price il-color--text__accent">R$ {{price}},00 <span>por mês</span></p>
    <p class="il-description il-color--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae nisi vel placeat, corrupti fuga assumenda non dolor cupiditate aperiam.</p>

    <a href="#" class="il-btn il-btn--cards button">Inscreva-se</a>
</div>
</template>

<script>
import anime from 'animejs';
export default {
    name: 'classCards',
    props: {
        id: String,
        condicions: Number,
        price: Number,
        text: String
    },
    data () {
        return {
            
        }
    },
    mounted () {
        this.startAnime();
    },
    methods: {
        startAnime () {
            let init = 400
            let include = 100
            let showAnime = anime.timeline({
                targets: '.il-plan--1',
                easing: 'easeInOutQuad'
            });
            showAnime.add({
                opacity: ['0', '1'],
                duration: init
            });
            showAnime.add({
                targets: '.il-plan--2',
                opacity: ['0', '1'],
                duration: init + include
            });
            showAnime.add({
                targets: '.il-plan--3',
                opacity: ['0', '1'],
                duration: init + 2 * include
            });
        },
    }
}
</script>