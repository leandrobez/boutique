<template>
<div class="il-container--wrapper">
    <section id="il-instructor" class="il-section il-section--instructor">
        <h1 class="il-section--title il-title--full"><!--<i :class="whatIcon"></i>-->Os <span class="il-color--text__gold">Instrutores</span></h1>
        <h2 class="il-section--sub-title il-color--text__gold">Aqui estão nossos professores:</h2>
        <div class="il-intructors--cards">
            <div class="il-cards">
                <div class="il-cards--avatar">
                    <img class="img-circle" :src="teachers.number1" alt="client1.jpg" />
                </div>
                    <div class="il-cards--body">
                        <div class="il-cards--caption">
                            <h4>Professor Alfa</h4>
                        </div>
                        <div class="il-cards--content">
                            <i class="mdi mdi-format-quote-close mdi-24px"></i>
                            <p class="il-cards--text">Excelente professora de CoreAlign</p>
                        </div>
                    </div>
                </div>
                <div class="il-cards">
                    <div class="il-cards--avatar"><img class="img-circle" :src="teachers.number2" alt="client1.jpg" /></div>
                        <div class="il-cards--body">
                            <div class="il-cards--caption">
                                <h4>Professor X</h4>
                            </div>
                            <div class="il-cards--content">
                                <i class="mdi mdi-format-quote-close mdi-24px"></i>
                                <p class="il-cards--text">Essa també é excelente?</p>
                            </div>
                        </div>
                    </div>
                    <div class="il-cards">
                        <div class="il-cards--avatar"><img class="img-circle" :src="teachers.number3" alt="client1.jpg" /></div>
                            <div class="il-cards--body">
                                <div class="il-cards--caption">
                                    <h4>Professor Y</h4>
                                </div>
                                <div class="il-cards--content">
                                    <i class="mdi mdi-format-quote-close"></i>
                                    <p class="il-cards--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Minima cum sint
                                        quae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
    <div class="il-about--content il-color--background__verylight">
            <p class="il-color--text__dark">No Studio 10 Pilates e CoreAlign</b> você contará com profissionais preparados, motivados e dispostos a lhe oferecer um serviço de excelente qualidade.</p>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Teachers',

    data() {
        return {
            whatIcon: "il-pilates-icon flaticon-twisting-arms",
            teachers: {
                number1: 'images/pictures/teacher1.jpg',
                number2: 'images/pictures/teacher2.jpg',
                number3: 'images/pictures/teacher3.jpg'
            }
        }
    }
}
</script>
