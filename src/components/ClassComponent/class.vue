<template>
<div class="il-container--wrapper">
    <section id="il-class" class="il-section il-section--class">
        <h1 class="il-section--title il-title--full">
            <!--<i :class="whatIcon"></i>-->As
            <span class="il-color--text__gold">Aulas</span>
        </h1>
        <h2 class="il-section--sub-title il-color--text__gold il-color--background__light">Venha fazer uma aula com a gente.</h2>

        <div class="il-space--content il-color--background__verylight">
            <h3 class="il-section--title__small il-color--text__dark">Por que aqui?</h3>
            <p class="il-color--text__dark"><b>Porque aqui no Studio 10 Pilates e CoreAlign</b> oferecemos um ambiente climatizado com cerca de 90 m², onde equipamentos de excelente qualidade estão a sua disposição.<br>Aqui foco sempre está na individualidade do aluno para que você receba toda a atenção que lhe é devida.</p>
        </div>
    </section>
    <section class="il-section il-section--prices il-color--background__verylight">
        <h2 class="il-section--sub-title il-color--text__gold il-color--background__light">Escolha um plano de aula:</h2>
        <div class="il-pricing--grid">
            <div class="il-plan il-color--background__light plan1">
                <h2 class="il-color--text__dark">1 X Semana</h2>
                <p class="il-price il-color--text__thirty">R$ 250,00 <span>por mês</span></p>
                <p class="il-description il-color--text__gold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae nisi vel placeat, corrupti fuga assumenda non dolor cupiditate aperiam..</p>
                <!--<ul class="il-features">
                    <li>HTML, CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Web Design</li>
                </ul>-->

                <a href="#" class="il-btn il-btn--cards button">Inscreva-se</a>
            </div>

            <div class="il-plan il-color--background__light plan2">
                <h2 class="il-color--text__dark">2 X Semana</h2>
                <p class="il-price il-color--text__thirty">R$ 480,00 <span>por mês</span></p>
                <p class="il-description il-color--text__gold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, natus voluptas. Reiciendis, qui voluptas? Nostrum officia quod enim labore pariatur.</p>
                <!--<ul class="il-features">
                    <li>Python</li>
                    <li>Ruby</li>
                    <li>Java</li>
                </ul>-->

                <a href="#" class="il-btn il-btn--cards button">Inscreva-se</a>
            </div>

            <div class="il-plan il-color--background__light plan3">
                <h2 class="il-color--text__dark">3 X Semana</h2>
                <p class="il-price il-color--text__thirty">R$ 720,00 <span>por mês</span></p>
                <p class="il-description il-color--text__gold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, modi? Adipisci corporis laborum odit aliquam dolores quasi neque, distinctio harum.</p>
                <!--<ul class="il-features">
                    <li>Information Architecture</li>
                    <li>User Research</li>
                    <li>Interaction Design</li>
                </ul>-->

                <a href="#" class="il-btn il-btn--cards button">Inscreva-se</a>
            </div>
        </div>
    </section>
    
</div>
</template>

<script>
export default {
    name: 'Class',

    data() {
        return {
            whatIcon: 'il-pilates-icon flaticon-exercises-with-chair'
        };
    }
};
</script>
