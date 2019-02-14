<template>
<div class="il-container--wrapper">
    <section id="il-advantage" class="il-section il-section--advantages">
        <h1 class="il-section--title">
            <!--<i :class="whatIcon"></i>-->As <span class="il-color--text__very-light">Vantagens</span></h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">Nossos diferencias falam por si só</h2>
    </section>
    <section class="il-section il-section--class__content">
        
        <div class="il-class--items">
            <ul class="il-advantage--list">
                <li >
                    <span class="il-color--text">Pilates</span>
                    <div class="il-advantage--content">
                        <blockquote>
                            O Método foca no movimento natural do nosso corpo e no respeito à nossa anatomia e a nossa biomecânica. Tem como objetivo fortalecer os músculos e articulações e melhorar a flexibilidade do corpo. É atualmente uma técnica reconhecida para tratamento e prevenção de problemas na coluna vertebral.
                        </blockquote>
                    </div>
                </li>
                <li>
                    <span class="il-color--text">CoreAlign</span>
                    <div class="il-advantage--content">
                        <blockquote>
                            CoreAlign é um ótimo complemento para o seu programa já existente, sendo uma ferramenta essencial para reabilitação e excelente para o equilíbrio e readaptação neuromuscular. Devido a sua versatilidade incrível permite o uso de adução, alongamento, aquecimento, resfriamento, ou para simplesmente se exercitar. O CoreAlign, além de um equipamento, é também um método de movimento que leva o preparo do corpo e da mente para um novo nível!<br>O sistema vem para somar e potencializar o trabalho de Pilates, de condicionamento físico em geral, de fisioterapia e/ou treinamento de atletas, individual ou em grupo.
                        </blockquote>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: "Advantage",

    data() {
        return {
            whatIcon: "il-pilates-icon flaticon-pilates-equipment"
        }
    },
}
</script>
