<template>
<div>
    <section id="il-class" class="il-section il-section--class">
        <div class="il-container--wrapper">
            <h1 class="il-section--title il-title--full">
                <!--<i :class="whatIcon"></i>-->As
                <span class="il-color--text__very-light">Aulas</span>
            </h1>
            <h2 class="il-section--sub-title il-color--text__very-light text-right">Venha fazer uma aula com a gente.</h2>

            <div class="il-space--content il-color--background__clean il-box">
                <i class="il-pilates-icon flaticon-side-bend-posture"></i>
                <span>Por quê?</span>
                <p class="il-color--text__alt">Porque aqui na <b>{{$parent.title}}</b> oferecemos um ambiente climatizado com cerca de 90 m², onde equipamentos de excelente qualidade estão a sua disposição.<br>Aqui foco sempre está na individualidade do aluno para que você receba toda a atenção que lhe é devida.</p>
            </div>
        </div>
    </section>
    <section class="il-section il-section--prices">
        <div class="il-container--wrapper">
            <h2 class="il-section--sub-title il-color--text__very-light text-right">Escolha um plano de aula:</h2>
            <div class="il-pricing--grid">
                <div class="il-plan il-color--background__clean plan1">
                    <h2 class="il-color--text__dark">1 X Semana</h2>
                    <p class="il-price il-color--text__accent">R$ 250,00 <span>por mês</span></p>
                    <p class="il-description il-color--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae nisi vel placeat, corrupti fuga assumenda non dolor cupiditate aperiam..</p>
                    <!--<ul class="il-features">
                        <li>HTML, CSS</li>
                        <li>JavaScript</li>
                        <li>Responsive Web Design</li>
                    </ul>-->

                    <a href="#" class="il-btn il-btn--cards button">Inscreva-se</a>
                </div>

                <div class="il-plan il-color--background__clean plan2">
                    <h2 class="il-color--text__dark">2 X Semana</h2>
                    <p class="il-price il-color--text__accent">R$ 480,00 <span>por mês</span></p>
                    <p class="il-description il-color--text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, natus voluptas. Reiciendis, qui voluptas? Nostrum officia quod enim labore pariatur.</p>
                    <!--<ul class="il-features">
                        <li>Python</li>
                        <li>Ruby</li>
                        <li>Java</li>
                    </ul>-->

                    <a href="#" class="il-btn il-btn--cards button">Inscreva-se</a>
                </div>

                <div class="il-plan il-color--background__clean plan3">
                    <h2 class="il-color--text__dark">3 X Semana</h2>
                    <p class="il-price il-color--text__accent">R$ 720,00 <span>por mês</span></p>
                    <p class="il-description il-color--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, modi? Adipisci corporis laborum odit aliquam dolores quasi neque, distinctio harum.</p>
                    <!--<ul class="il-features">
                        <li>Information Architecture</li>
                        <li>User Research</li>
                        <li>Interaction Design</li>
                    </ul>-->

                    <a href="#" class="il-btn il-btn--cards button">Inscreva-se</a>
                </div>
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
